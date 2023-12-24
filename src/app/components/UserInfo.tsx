"use client";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { signOut } from "next-auth/react";

const UserInfo = () => {
  return (
    <Stack>
      <Typography>Name: HARD_CODED_NAME</Typography>
      <Typography>Email: HARD_CODED_EMAIL</Typography>
      <Button type="submit" onClick={() => signOut()}>
        Logout
      </Button>
    </Stack>
  );
};

export default UserInfo;
