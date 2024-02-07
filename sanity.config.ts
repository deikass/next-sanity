import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import {myStructure } from "./sanity/sanity-desk-structure";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import documentConfig from "./sanity/config/document-config";
import { getDefaultDocumentNode } from "./sanity/sanity-document-preview";

const config = defineConfig({
    projectId: 'if5ipm03',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-03-03',
    basePath: '/admin',
    plugins: [
        structureTool({
          structure:myStructure,
          defaultDocumentNode: getDefaultDocumentNode,
        }),
        simplerColorInput({
          defaultColorFormat: 'rgba',
        }),

      ],
    schema: { types: schemas },
    document: documentConfig,

});

export default config;