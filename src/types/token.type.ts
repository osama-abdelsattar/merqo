interface DecodedToken {
  message: "verified" | string;
  decoded: {
    id: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
  };
}

export type { DecodedToken };
