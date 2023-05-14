import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import Carousel from "./Carousel";
import cardData from "./CardData/Midjourney";

const MidjouneyPrompts = () => {
  return (
    <Box>
      <Box px="4%">
        <Flex mt="36px" mb="12px" ml="12px" alignItems="center">
          <Text fontSize="28px" fontWeight="bold" mr="12px">
            Midjouney Prompts
          </Text>
          <MdAddCircle size={36} />
        </Flex>
        <Divider mb="16px" borderColor="gray.400" borderBottomWidth="1.5px" />
      </Box>
      <Box px="2%">
        <Carousel cardData={cardData}></Carousel>
      </Box>
    </Box>
  );
};

export default MidjouneyPrompts;
