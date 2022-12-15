import Head from "next/head";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="main">
      <Flex flexDirection={"column"} align={"center"}>
        <Head>
          <title>pakhi.fun</title>
          <link rel="shortcut icon" href="pfp.png" />
          <meta
            name="description"
            content="internet carpenter? code x design"
            key="desc"
          />
          <meta property="og:title" content="Pakhi Goel" />
          <meta
            property="og:image"
            content="https://i.postimg.cc/htXj19hw/91629ae6-65b4-47a0-a1d2-586c0ce6b864-1.jpg"
          />
        </Head>
        <Flex
          height={"123px"}
          width={{ base: "319px", md: "703px" }}
          backgroundColor={"#171413"}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
          marginTop={{ base: "66px", md: "84px" }}
          borderRadius={"12px"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          align={"center"}
        >
          <Flex marginLeft={{ base: "14.18px", md: "26px" }} gap={"15px"}>
            <a
              href="https://twitter.com/0xpakhi"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image
                src={"pfp.png"}
                width={"75px"}
                borderRadius={"100px"}
                alt={"pfp"}
              />
            </a>
            <Flex flexDir={"column"} gap={{ base: "6px", md: "0px" }}>
              <Text
                color={"white"}
                fontSize={{ base: "16px", md: "24px" }}
                fontWeight={"600"}
              >
                <a
                  href="https://twitter.com/0xpakhi"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Pakhi Goel
                </a>
              </Text>
              <Text
                color={"rgba(255, 255, 255, 0.8)"}
                fontSize={{ base: "12px", md: "16px" }}
                fontWeight={"400"}
              >
                internet craftsman? code x design <br />
                sadasya{" "}
                <a
                  href="https://twitter.com/cosparivaar"
                  target="_blank"
                  rel="noreferrer"
                >
                  @cosparivaar
                </a>{" "}
                ; econ + cs{" "}
                <a
                  href="https://www.mirandahouse.ac.in/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  @MirandaHouse
                </a>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          marginTop={"46px"}
          gap={"31px"}
          display={{ base: "none", md: "flex" }}
        >
          <Flex
            height={"246px"}
            width={"371px"}
            borderRadius={"12px"}
            align={"center"}
            backgroundImage={"pow.svg"}
            backgroundSize={"cover"}
            justify={"center"}
          >
            <Text color={"white"} fontSize={"24px"} fontWeight={"700"}>
              Proof of Work
            </Text>
          </Flex>
          <Flex flexDir={"column"} height={"246px"}>

            <iframe
              style={{ borderRadius: "12px" }}
              height={"108px"}
              src="https://open.spotify.com/embed/track/3XmJ4yghm34AEFQL8iyC4N?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <a href={"./art"} target={"_blank"}>
              <Flex
                height={"138"}
                width={"301px"}
                borderRadius={"12px"}
                backgroundImage={"art.png"}
                backgroundSize={"cover"}
                align={"center"}
                justify={"center"}
              >
                <Text color={"white"} fontSize={"24px"} fontWeight={"700"}>
                  🎨Art
                </Text>
              </Flex>
            </a>
          </Flex>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          marginTop={"26px"}
          flexDir={"column"}
          gap={"26px"}
        >
          <Flex gap={"13.68px"}>
            <Flex
              height={{ base: "126px", md: "246px" }}
              width={{ base: "152.32px", md: "371px" }}
              borderRadius={"12px"}
              align={"center"}
              backgroundImage={"pow.svg"}
              backgroundSize={"cover"}
              justify={"center"}
            >
              <Text
                color={"white"}
                fontSize={{ base: "16px", md: "24px" }}
                fontWeight={"700"}
              >
                Proof of Work
              </Text>
            </Flex>
            <a href={"./art"} target={"_blank"}>
              <Flex
                height={{ base: "126px", md: "138px" }}
                width={{ base: "153.2px", md: "301px" }}
                borderRadius={"12px"}
                backgroundImage={"art.png"}
                backgroundSize={"cover"}
                align={"center"}
                justify={"center"}
              >
                <Text
                  color={"white"}
                  fontSize={{ base: "16px", md: "24px" }}
                  fontWeight={"700"}
                >
                  🎨Art
                </Text>
              </Flex>
            </a>
          </Flex>
          <iframe
            style={{ borderRadius: "12px" }}
            height={"80px"}
            src="https://open.spotify.com/embed/track/3XmJ4yghm34AEFQL8iyC4N?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Flex>
        <Accordion
          allowMultiple
          marginTop={{ base: "24px", md: "46px" }}
          width={{ base: "319px", md: "703px" }}
          background={"rgba(23, 20, 19, 0.2)"}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
          borderRadius={"12px"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          justifyContent={"space-between"}
          color={"white"}
          align={"center"}
          justify={"center"}
        >
          <AccordionItem
            marginTop={"10px"}
            borderRadius={"12px"}
            align={"center"}
            width={{ base: "285px", md: "637px" }}
            border={"1px solid rgba(255, 255, 255, 0.0)"}
            marginBottom={"10px"}
          >
            <AccordionButton
              fontWeight={"700"}
              fontSize={{ base: "16px", md: "24px" }}
              justifyContent={"space-between"}
            >
              <Box>Builds🚢</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign={"left"}>
              <i>In progress, updating soon</i>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </div>
  );
}
