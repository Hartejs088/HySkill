import {
  generateJWTToken_email,
  generateJWTToken_username,
} from "../utils/generateJWTToken.js";

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.model.js";
import { UnRegisteredUser } from "../models/unRegisteredUser.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

export const googleAuthHandler = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: `${process.env.FRONTEND_URL}/login`,
  session: false,
});

export const handleGoogleLoginCallback = asyncHandler(async (req, res) => {
  console.log(
    "\n******** Inside handleGoogleLoginCallback function ********"
  );

  const email = req.user._json.email;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const jwtToken = generateJWTToken_username(existingUser);

    const expiryDate = new Date(
      Date.now() + 1 * 60 * 60 * 1000
    );

    res.cookie("accessToken", jwtToken, {
      httpOnly: true,
      expires: expiryDate,
      secure: true,
      sameSite: "None",
    });

    return res.redirect(
      `${process.env.FRONTEND_URL}/discover`
    );
  }

  let unregisteredUser = await UnRegisteredUser.findOne({
    email,
  });

  if (!unregisteredUser) {
    console.log("Creating new Unregistered User");

    unregisteredUser = await UnRegisteredUser.create({
      name: req.user._json.name,
      email: req.user._json.email,
      picture: req.user._json.picture,
    });
  }

  const jwtToken = generateJWTToken_email(unregisteredUser);

  const expiryDate = new Date(
    Date.now() + 0.5 * 60 * 60 * 1000
  );

  res.cookie("accessTokenRegistration", jwtToken, {
    httpOnly: true,
    expires: expiryDate,
    secure: true,
    sameSite: "None",
  });

  return res.redirect(
    `${process.env.FRONTEND_URL}/register`
  );
});

export const handleLogout = (req, res) => {
  console.log(
    "\n******** Inside handleLogout function ********"
  );

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        null,
        "User logged out successfully"
      )
    );
};
