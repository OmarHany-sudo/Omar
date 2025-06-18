import { extendTheme } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    nightOwl: {
      background: "#011627",
      text: "#d6deeb",
      accent: "#7e57c2",
      comment: "#637777",
      string: "#addb67",
      variable: "#addb67",
      keyword: "#c792ea",
      number: "#f78c6c",
      constant: "#82aaff",
      function: "#82aaff",
      class: "#ffcb8b",
      type: "#ffcb8b",
      builtin: "#82aaff",
      property: "#80cbc4",
      namespace: "#b2ccd6",
      punctuation: "#c792ea",
      decorator: "#f78c6c",
      regex: "#5ca7e4",
    },
    syntax: {
      comment: "#6A9955",
      string: "#CE9178",
      number: "#B5CEA8",
      keyword: "#569CD6",
      boolean: "#569CD6",
      function: "#DCDCAA",
      class: "#4EC9B0",
      type: "#4EC9B0",
      variable: "#9CDCFE",
      parameter: "#9CDCFE",
      property: "#9CDCFE",
      constant: "#4FC1FF",
      operator: "#D4D4D4",
      punctuation: "#D4D4D4",
      tag: "#569CD6",
      attrName: "#9CDCFE",
      attrValue: "#CE9178",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1F2428" : "white",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
});

export default theme;

