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
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194075/art_1_row28o.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194083/art_2_mze7ot.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194064/art_3_elsvdp.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194058/art_4_gatasq.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194065/art_5_isrgvd.jpg"
              alt="art"
              borderRadius={"7px"}
            />
          </Flex>
          <Flex flexDir={"column"} gap={"20px "}>
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194080/art_6_bfusck.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194075/art_7_vosksy.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194077/art_8_mrdnkj.jpg"
              alt="art"
              borderRadius={"7px"}
            />
            <Image
              src="https://res.cloudinary.com/dujln9itl/image/upload/v1671194081/art_10_krbxxy.jpg"
              alt="art"
              borderRadius={"7px"}
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
