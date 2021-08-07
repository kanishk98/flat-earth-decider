interface AttributeMap {
  [key: string]: string | boolean | number | AttributeMap;
}

interface BlockRequest {
  blockLabel: string;
  blockName: string;
  blockType: "data" | "resource";
  attributes: AttributeMap;
  isPrimary: boolean;
  dependsOn?: string;
}
