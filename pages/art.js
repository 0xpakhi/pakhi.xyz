import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";
import art1 from "../public/art/art (1).jpg";
import art2 from "../public/art/art (2).jpg";
import art3 from "../public/art/art (3).jpg";
import art4 from "../public/art/art (4).jpg";
import art5 from "../public/art/art (5).jpg";
import art6 from "../public/art/art (6).jpg";
import art7 from "../public/art/art (7).jpg";
import art8 from "../public/art/art (8).jpg";
import art10 from "../public/art/art (10).jpg";

export default function art() {
  return (
    <div className="main">
      <Flex flexDirection={"column"} align={"center"} paddingBottom={"70px"}>
        <Head>
          <title>pakhi.xyz</title>
          <link rel="shortcut icon" href="pfp.png" />
          <meta name="description" content="🎨Art" key="desc" />
          <meta property="og:title" content="Pakhi Goel" />
          <meta
            property="og:image"
            content="https://i.postimg.cc/hjPNV0tQ/IMG-7482.jpg"
          />
        </Head>
        <Flex
          height={"103px"}
          width={{ base: "319px", md: "703px" }}
          backgroundColor={"#171413"}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
          marginTop={{ base: "66px", md: "84px" }}
          borderRadius={"12px"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          justify={"center"}
          align={"center"}
        >
          <Text
            color={"white"}
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"700"}
            textAlign={"center"}
          >
            🎨Art
          </Text>
        </Flex>
        <Flex
          width={{ base: "319px", md: "703px" }}
          gap={"20px"}
          marginTop={{ base: "24px", md: "46px" }}
        >
          <Flex flexDir={"column"} gap={"20px "}>
            <Image src={art1} alt="art" style={{ borderRadius: "7px" }}  placeholder="blur"/>
            <Image src={art2} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
            <Image src={art3} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
            <Image src={art4} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
          </Flex>
          <Flex flexDir={"column"} gap={"20px "}>
            <Image src={art6} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
            <Image src={art7} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
            <Image src={art8} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
            <Image src={art5} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
            <Image src={art10} alt="art" style={{ borderRadius: "7px" }} placeholder="blur"/>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
