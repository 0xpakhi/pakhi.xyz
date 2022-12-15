import React from "react";
import Head from "next/head";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
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
            <Image src="art (1).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (2).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (3).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (4).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (5).jpg" alt="art" borderRadius={"7px"} />
          </Flex>
          <Flex flexDir={"column"} gap={"20px "}>
            <Image src="art (6).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (7).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (8).jpg" alt="art" borderRadius={"7px"} />
            <Image src="art (10).jpg" alt="art" borderRadius={"7px"} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
