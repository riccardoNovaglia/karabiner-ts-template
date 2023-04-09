import { Rule, from } from "karabiner-ts";
import { privateRules } from "./private/private";

export const rules = [
  // Add more rules here
  Rule("Test rule", from("a").to("b")),
  ...privateRules,
];
