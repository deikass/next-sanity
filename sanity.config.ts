import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import { myStructure } from "./sanity/sanity-desk-structure";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";

const config = defineConfig({
    projectId: 'if5ipm03',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-03-03',
    basePath: '/admin',
    plugins: [
        structureTool({
          structure:myStructure
        }),
        simplerColorInput({
          defaultColorFormat: 'rgba',
        })
      ],
    schema: { types: schemas }
});

export default config;