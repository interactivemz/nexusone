import coreWebVitals from "eslint-config-next/core-web-vitals";
import next from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...next,
  {
    // Node/CommonJS tooling scripts — not part of the app bundle
    ignores: [".next/**", "node_modules/**", "scripts/**"],
  },
];

export default eslintConfig;
