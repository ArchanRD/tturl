"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useEffect, useState } from "react";

const BackgroundProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;
  else
    return (
      <>
        {/* <BackgroundBeamsWithCollision> */}
          {children}
        {/* </BackgroundBeamsWithCollision> */}
      </>
    );
};

export default BackgroundProvider;
