export default function getBlockRequest(
  azCount: number,
  blockLabel: string,
  attributes: AttributeMap
) {
  const request = {
    primary: [
      {
        blockType: "resource",
        blockName: "aws_msk_cluster",
        blockLabel,
        attributes,
      },
    ],
    aux: [
      {
        blockType: "resource",
        blockName: "aws_security_group",
        blockLabel: `${blockLabel}_security_group`,
        attributes: {},
      },
    ],
  };
  getMultipleBlocksRequests(
    azCount,
    "resource",
    blockLabel,
    "aws_subnet",
    {}
  ).map((b) => request.aux.push(b));
  return request;
}

function getMultipleBlocksRequests(
  azCount: number,
  blockType: string,
  blockLabel: string,
  blockName: string,
  attributes: AttributeMap
): BlockRequest[] {
  const blockRequests = [];
  for (let i = 1; i <= azCount; ++i) {
    blockRequests.push({
      blockType,
      blockName: `${blockName}_az_${i}`,
      blockLabel,
      attributes,
    });
  }
  return blockRequests;
}
