import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
export default function art() {
  return (
    <div className="main">
      <Flex flexDirection={"column"} align={"center"}>
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
          _hover={{color:"black"}}
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
      </Flex>
    </div>
  );
}
