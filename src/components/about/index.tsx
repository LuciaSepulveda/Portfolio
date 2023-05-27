import { useLanguage } from "@/context/hooks"
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const About = () => {
  const language = useLanguage()
  return (
    <Center h="80vh" position="relative" id="about">
      {/* <MotionBox
        zIndex={0}
        position="absolute"
        //h="480px"
        bg="rgb(120, 233, 143)"
        bottom={-12}
        //right="0"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.3,
        }}
        whileInView={{ width: "480px", height: "480px" }}
        initial={{ width: 0, x: 640, height: 0 }}
        viewport={{ once: true }}
        borderRadius="full"
      />
      <MotionBox
        zIndex={0}
        position="absolute"
        //h="480px"
        bg="rgb(234, 98, 118)"
        bottom={-8}
        //right="0"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0,
        }}
        whileInView={{ width: "280px", height: "280px" }}
        initial={{ width: "100px", x: -640, height: "100px" }}
        viewport={{ once: true }}
        borderRadius="full"
      />
      <MotionBox
        zIndex={0}
        position="absolute"
        //h="480px"
        bg="rgb(223, 200, 122)"
        bottom={"-50%"}
        //right="0"
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0,
        }}
        whileInView={{ width: "180px", height: "180px" }}
        initial={{ width: "0px", x: 0, height: "0px" }}
        viewport={{ once: true }}
        borderRadius="full"
      /> */}
      <VStack zIndex={2}>
        <Box position="relative">
          <Heading as="h2" zIndex={2} mb={6}>
            {language === "ES" ? "SOBRE MI" : "ABOUT ME"}
          </Heading>
          <MotionBox
            zIndex={0}
            position="absolute"
            h="4%"
            bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
            bottom={6}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.3,
            }}
            whileInView={{ width: "100%" }}
            initial={{ width: 0 }}
            viewport={{ once: true }}
            borderRadius="sm"
          />
        </Box>
        <Flex flexWrap="wrap" maxW="3xl" justify="center">
          <Text
            fontSize={["xl", "2xl"]}
            textAlign="center"
            m={0}
            display="inline"
          >
            {language === "ES" ? `Cuento con` : `I have`}
          </Text>
          <Box position="relative" m={0} display="inline" mx={2}>
            <Text
              fontSize={["xl", "2xl"]}
              textAlign="center"
              position="relative"
              zIndex={1}
            >
              {language !== "ES"
                ? "more than a year of experience"
                : "más de un año de experiencia"}
            </Text>
            <MotionBox
              zIndex={0}
              position="absolute"
              h="100%"
              bg={useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)")}
              bottom={0}
              left="-2%"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
              }}
              whileInView={{ width: "104%" }}
              initial={{ width: 0 }}
              viewport={{ once: true }}
              borderRadius="sm"
              opacity={0.9}
            />
          </Box>
          <Text fontSize={["xl", "2xl"]} textAlign="center" display="inline">
            {language === "ES"
              ? `como desarrolladora Frontend.`
              : `of frontend development.`}
          </Text>
          <Text fontSize={["xl", "2xl"]} textAlign="center" display="inline">
            {language === "ES"
              ? `Trabajé para una agencia creativa donde tuve la oportunidad de formar
          parte de distintos proyectos. Algunos fueron sitios web tradicionales
          y otros fueron más creativos y desafiantes con elementos 3D.`
              : `I worked for a creative agency where I have the opportunity to 
          join differents projects. Some of them was traditional websites
          and others was more creatives and challenge with 3D elements.`}
          </Text>
        </Flex>
        {/* <VStack maxW="4xl">
          <Box position="relative" pt={8}>
            <Heading as="h2" zIndex={2} mb={6}>
              {language === "ES" ? "HABILIDADES" : "SKILLS"}
            </Heading>
            <MotionBox
              zIndex={0}
              position="absolute"
              h="4%"
              bg="rgb(120, 233, 143)"
              bottom={6}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.3,
              }}
              whileInView={{ width: "100%" }}
              initial={{ width: 0 }}
              viewport={{ once: true }}
              borderRadius="sm"
            />
          </Box>
          <HStack flexWrap="wrap">
            {techs.map((tech) => (
              <Box w={40} key={tech}>
                <Text fontSize="2xl" fontWeight="bold" textAlign="center">{tech}</Text>
              </Box>
            ))}
          </HStack>
        </VStack> */}
      </VStack>
    </Center>
  )
}

export default About