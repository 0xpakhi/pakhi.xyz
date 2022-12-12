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
        <Flex
          height={"123px"}
          width={"703px"}
          backgroundColor={"#171413"}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
          marginTop={"84px"}
          borderRadius={"12px"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          align={"center"}
        >
          <Flex marginLeft={"26px"} gap={"15px"}>
            <Image
              src={"pfp.png"}
              height={"75px"}
              width={"75"}
              borderRadius={"100px"}
              alt={"pfp"}
            />
            <Flex flexDir={"column"}>
              <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
                Pakhi Goel
              </Text>
              <Text
                color={"rgba(255, 255, 255, 0.8)"}
                fontSize={"16px"}
                fontWeight={"400"}
              >
                internet craftsman? code x design <br />
                sadasya @cosparivaar ; econ + cs @MirandaHouse
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex marginTop={"46px"} gap={"31px"}>
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
              src="https://open.spotify.com/embed/track/7HE4i03hLQsuuV0fUPFypJ?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

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
          </Flex>
        </Flex>
        <Accordion
          allowMultiple
          marginTop={"46px"}
          width={"703px"}
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
            width={"637px"}
            border={"1px solid rgba(255, 255, 255, 0.0)"}
            marginBottom={"10px"}
          >
            <AccordionButton
              fontWeight={"700"}
              fontSize={"24px"}
              justifyContent={"space-between"}
            >
              <Box>Builds🚢</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </div>
  );
}
