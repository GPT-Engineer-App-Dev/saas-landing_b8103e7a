import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaMobileAlt, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Flex align="center" justify="space-between" p={8}>
        <Heading size="lg">SaaSify</Heading>
        <Button colorScheme="blue" rightIcon={<FaArrowRight />}>
          Get Started
        </Button>
      </Flex>
      <Flex direction="column" align="center" justify="center" mt={10}>
        <Heading size="2xl" mb={4}>
          Revolutionize Your Workflow
        </Heading>
        <Text fontSize="xl" mb={8}>
          The ultimate cloud-based solution for your business needs.
        </Text>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEzNDE5MzUwfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="full" />
      </Flex>
      <VStack spacing={8} mt={16} px={8}>
        <Feature icon={FaCloud} title="Cloud Integration" description="Seamlessly integrate with existing cloud services to enhance your workflow." />
        <Feature icon={FaMobileAlt} title="Mobile Ready" description="Access your data from anywhere with our fully optimized mobile platform." />
        <Feature icon={FaRocket} title="Fast Performance" description="Experience lightning-fast performance and efficiency with our cutting-edge technology." />
      </VStack>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <Flex align="center" p={5} bg="white" boxShadow="md" borderRadius="lg" w="full">
      <Box p={3} color="white" bg="blue.500" borderRadius="md">
        <IconComponent size="24px" />
      </Box>
      <Box ml={4}>
        <Heading size="md">{title}</Heading>
        <Text mt={1}>{description}</Text>
      </Box>
    </Flex>
  );
};

export default Index;
