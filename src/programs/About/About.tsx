import "@fontsource/jetbrains-mono/"
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

import { techs, techsEn, info, infoEn } from "../../data/data"
import { useChangeSectionAbout, useLanguage } from "../../context/hooks"
import { useEffect, useState } from "react"

interface Props {
  w: string
  h: string
}

const About = ({ h, w }: Props) => {
  const [state, setState] = useState<string>("sobre mi")
  const [update, setUpdate] = useState<boolean>(false)
  const changeSection = useChangeSectionAbout()
  const bgLeft = useColorModeValue("#E6F2F3", "#07273B")
  const bgRight = useColorModeValue("#F4F6F6", "#07273B")
  const bgLeftTop = useColorModeValue("#BEDEEF", "#09334E")
  const text = useColorModeValue("#6F838D", "white")
  const text1 = useColorModeValue("#FF5592", "#CA7692")
  const text2 = useColorModeValue("#ED3F44", "#DF4F38")
  const text3 = useColorModeValue("#AF8F27", "#D58929")
  const text4 = useColorModeValue("#009BAF", "#46E991")
  const colorCorchetes = useColorModeValue("#8DA6AC", "#568498")
  const language = useLanguage()
  const [skills, setSkills] = useState(techs)
  const [information, setInformation] = useState(info)

  useEffect(() => {
    if (language === "ES") {
      setSkills(techs)
      setInformation(info)
    } else {
      setSkills(techsEn)
      setInformation(infoEn)
    }
  }, [language])

  const updateState = (s: string) => {
    setUpdate(true)
    setState(s)
    changeSection(s)
  }

  useEffect(() => {
    if (language === "ES") {
      if (state === "about me") {
        changeSection("sobre mi")
      } else if (state === "skills") changeSection("habilidades")
    } else {
      if (state === "sobre mi") {
        changeSection("about me")
      } else if (state === "habilidades") changeSection("skills")
    }
  }, [language])

  useEffect(() => {
    if (update === true) {
      setUpdate(false)

      return
    }
  }, [update])

  return (
    <VStack
      borderRadius="xl"
      borderTopRadius="none"
      fontSize={["small", "md"]}
      h={h}
      spacing="0px"
      w={w}
    >
      <Grid
        bg={bgRight}
        borderRadius="xl"
        borderTopRadius="none"
        gap={0}
        h="100%"
        templateColumns="repeat(4, 1fr)"
        transitionTimingFunction="ease-in-out"
        w="100%"
      >
        <GridItem
          bg={bgLeft}
          borderBottomLeftRadius="xl"
          colSpan={1}
          transitionTimingFunction="ease-in-out"
        >
          <VStack>
            <Box
              bg={bgLeftTop}
              p={1}
              transitionTimingFunction="ease-in-out"
              w="100%"
            >
              <Text
                align="justify"
                color={text}
                fontSize="small"
                fontWeight="bold"
                ml="10px"
              >
                Portfolio
              </Text>
            </Box>
            <HStack w="100%">
              {state === "sobre mi" || state === "about me" ? (
                <>
                  <ChevronRightIcon color={text} />
                  <Text align="justify" color={text} ml="10px">
                    {language === "ES" ? "Sobre mí" : "About me"}
                  </Text>
                </>
              ) : (
                <Text
                  align="justify"
                  as="button"
                  color={text}
                  ml="10px"
                  onClick={() =>
                    updateState(language === "ES" ? "sobre mi" : "about me")
                  }
                >
                  {language === "ES" ? "Sobre mí" : "About me"}
                </Text>
              )}
            </HStack>
            <HStack w="100%">
              {state === "skills" || state === "habilidades" ? (
                <>
                  <ChevronRightIcon color={text} />
                  <Text align="justify" color={text} ml="10px">
                    {language === "ES" ? "Habilidades" : "Skills"}
                  </Text>
                </>
              ) : (
                <Text
                  align="justify"
                  as="button"
                  color={text}
                  ml="10px"
                  onClick={() =>
                    updateState(language === "ES" ? "habilidades" : "skills")
                  }
                >
                  {language === "ES" ? "Habilidades" : "Skills"}
                </Text>
              )}
            </HStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={3}>
          <VStack fontFamily="JetBrains Mono" spacing={0}>
            {(state === "about me" || state === "sobre mi") && (
              <>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`<`}!</Text>
                  <Text color={text1}>DOCTYPE html</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>html</Text>
                  <Text color={text3}> lang</Text>
                  <Text color={text}>{`=`}</Text>
                  <Text color={text4}>{`"ES"`}</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>head</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="20%" spacing={["1px", "4px"]} w="80%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>title</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                  <Text color={text}>Portfolio</Text>
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>title</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>head</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>body</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="20%" spacing={["1px", "4px"]} w="80%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>h1</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                  <Text color={text}>Lucia Sepulveda</Text>
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>h1</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                {information.map((elem) => (
                  <HStack key={elem} ml="20%" spacing={["1px", "4px"]} w="80%">
                    <Text color={colorCorchetes}>{`<`}</Text>
                    <Text color={text2}>p</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                    <Text color={text} fontSize={["xs", null, "initial"]}>
                      {elem}
                    </Text>
                    <Text color={colorCorchetes}>{`</ `}</Text>
                    <Text color={text2}>p</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                  </HStack>
                ))}
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>body</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>html</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
              </>
            )}
            {(state === "skills" || state === "habilidades") && (
              <>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>ul</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                {skills.map((elem) => (
                  <HStack
                    key={elem}
                    ml="10%"
                    spacing={["1px", "4px"]}
                    w={["100%", "90%"]}
                  >
                    <Text color={colorCorchetes}>{`<`}</Text>
                    <Text color={text2}>li</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                    <Text color={text}> {elem} </Text>
                    <Text color={colorCorchetes}>{`</ `}</Text>
                    <Text color={text2}>li</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                  </HStack>
                ))}
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>ul</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
              </>
            )}
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  )
}

export default About
