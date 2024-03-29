import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { ArrowUpDownIcon, CloseIcon, MinusIcon } from "@chakra-ui/icons"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"

import {
  useCloseProgram,
  useLanguage,
  useMaximizedProgram,
  useMinimizedProgram,
  useSectionAbout,
} from "../../context/hooks"
import { Program } from "../../types/types"
import { useState } from "react"

interface Props {
  program: Program
  children: React.ReactNode
}

const Window = ({ program, children }: Props) => {
  const close = useCloseProgram()
  const maximized = useMaximizedProgram()
  const minimized = useMinimizedProgram()
  const section = useSectionAbout()
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const [closeButton, setCloseButton] = useState<number>(0)
  const [minButton, setMinButton] = useState<number>(0)
  const [maxButton, setMaxButton] = useState<number>(0)
  const language = useLanguage()

  return (
    <>
      {!isPortrait && (
        <motion.div
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ scale: 0, y: 500, opacity: 0 }}
          initial={{ y: !program.maximized ? 500 : 0, scale: 0 }}
          style={{
            height: program.maximized ? "calc(100% - 101px)" : "auto",
            width: program.maximized ? "100%" : "",
            position: program.maximized ? "absolute" : "relative",
          }}
        >
          <Box
            bg="#242424"
            border="1px solid"
            borderColor="black"
            borderRadius="xl"
            boxShadow="lg"
            position="relative"
            width="100%"
            zIndex="1"
            borderTopRadius={program.maximized ? "none" : "auto"}
            h={program.maximized ? "100%" : ""}
          >
            <Flex
              bg="#313131"
              borderTopRadius={program.maximized ? "" : "xl"}
              h="30px"
              w="100%"
            >
              <motion.div
                style={{
                  height: "15px",
                  width: "15px",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
                onHoverEnd={() => setCloseButton(0)}
                onHoverStart={() => setCloseButton(1)}
              >
                <Center
                  alignContent="center"
                  as="button"
                  bg="#EF5050"
                  borderRadius="50%"
                  h="15px"
                  w="15px"
                  onClick={() => {
                    close(program)
                  }}
                >
                  <CloseIcon
                    color="rgba(0,0,0,0.7)"
                    h="7.5px"
                    style={{ opacity: `${closeButton}` }}
                    w="7.5px"
                  />
                </Center>
              </motion.div>
              <motion.div
                style={{
                  height: "15px",
                  width: "15px",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
                onHoverEnd={() => setMinButton(0)}
                onHoverStart={() => setMinButton(1)}
              >
                <Center
                  alignSelf="center"
                  as="button"
                  bg="#F6AD3B"
                  borderRadius="50%"
                  h="15px"
                  w="15px"
                  onClick={() => {
                    minimized(program)
                  }}
                >
                  <MinusIcon
                    color="rgba(0,0,0,0.7)"
                    h="7.5px"
                    style={{ opacity: `${minButton}` }}
                    w="7.5px"
                  />
                </Center>
              </motion.div>
              <motion.div
                style={{
                  height: "15px",
                  width: "15px",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
                onHoverEnd={() => setMaxButton(0)}
                onHoverStart={() => setMaxButton(1)}
              >
                <Center
                  alignSelf="center"
                  as="button"
                  bg="#4DC849"
                  borderRadius="50%"
                  h="15px"
                  w="15px"
                  onClick={() => maximized(program)}
                >
                  <ArrowUpDownIcon
                    color="rgba(0,0,0,0.7)"
                    h="7.5px"
                    style={{ opacity: `${maxButton}` }}
                    w="7.5px"
                  />
                </Center>
              </motion.div>
              <Center w="85%">
                {program.name === "User" && (
                  <Text color="white" fontWeight="bold">
                    {section} -
                  </Text>
                )}
                <Text color="white" fontWeight="bold" ml="5px">
                  {language === "EN"
                    ? program.name
                    : program.name === "User"
                    ? "Usuario"
                    : program.name === "Projects"
                    ? "Proyectos"
                    : program.name === "Contact"
                    ? "Contacto"
                    : program.name === "Work"
                    ? "Experiencia laboral"
                    : "Pantalla"}
                </Text>
              </Center>
            </Flex>
            {children}
          </Box>
        </motion.div>
      )}
      {isPortrait && (
        <motion.div
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 200, opacity: 0, scale: 0 }}
          initial={{ y: 200, scale: 0 }}
          style={{
            height: "calc(100% - 101px)",
            width: "100%",
            position: "absolute",
          }}
        >
          <Box
            bg="#242424"
            border="1px solid"
            borderColor="black"
            borderRadius="xl"
            borderTopRadius="none"
            boxShadow="lg"
            h="100%"
            position="relative"
            w="100%"
          >
            <Flex bg="#313131" h="30px" w="100%">
              <motion.div
                style={{
                  height: "15px",
                  width: "15px",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
                onHoverEnd={() => setCloseButton(0)}
                onHoverStart={() => setCloseButton(1)}
              >
                <Center
                  alignContent="center"
                  as="button"
                  bg="#EF5050"
                  borderRadius="50%"
                  h="15px"
                  w="15px"
                  onClick={() => {
                    close(program)
                  }}
                >
                  <CloseIcon
                    color="rgba(0,0,0,0.7)"
                    h="7.5px"
                    style={{ opacity: `${closeButton}` }}
                    w="7.5px"
                  />
                </Center>
              </motion.div>
              <motion.div
                style={{
                  height: "15px",
                  width: "15px",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
                onHoverEnd={() => setMinButton(0)}
                onHoverStart={() => setMinButton(1)}
              >
                <Center
                  alignSelf="center"
                  as="button"
                  bg="#F6AD3B"
                  borderRadius="50%"
                  h="15px"
                  w="15px"
                  onClick={() => {
                    minimized(program)
                  }}
                >
                  <MinusIcon
                    color="rgba(0,0,0,0.7)"
                    h="7.5px"
                    style={{ opacity: `${minButton}` }}
                    w="7.5px"
                  />
                </Center>
              </motion.div>
              <motion.div
                style={{
                  height: "15px",
                  width: "15px",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
                onHoverEnd={() => setMaxButton(0)}
                onHoverStart={() => setMaxButton(1)}
              >
                <Center
                  alignSelf="center"
                  bg="#317e2e"
                  borderRadius="50%"
                  h="15px"
                  w="15px"
                />
              </motion.div>
              <Center w="85%">
                {program.name === "User" && (
                  <Text color="white" fontWeight="bold">
                    {section} -
                  </Text>
                )}
                <Text color="white" fontWeight="bold" ml="5px">
                  {program.name}
                </Text>
              </Center>
            </Flex>
            {children}
          </Box>
        </motion.div>
      )}
    </>
  )
}

export default Window
