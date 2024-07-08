import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  Input,
  Image,
  Text,
  useDisclosure,
  Flex,
  Box,
} from '@chakra-ui/react';

const SubscribeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="teal.300">
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={4}>
              <Image 
                src="https://p2pclouds.org/wp-content/uploads/2024/05/3-join-us.png.webp" 
                alt="Subscribe" 
                boxSize="100px"
                mr={{ md: 4 }}
                mb={{ base: 4, md: 0 }}
              />
              <Box>
                <Text fontSize="xl" fontWeight="bold">
                  Let's Connect
                </Text>
                <Text fontSize="md">
                  Subscribe Our Newsletter Now
                </Text>
              </Box>
            </Flex>
            <Input placeholder="Enter your email" mb={4} />
            <Button colorScheme="teal" onClick={onClose}>
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubscribeModal;
