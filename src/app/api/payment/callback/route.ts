function successResponse(): Response {
  return Response.json({
    resCode: "00",
    resDesc: "success",
    transactionId: "เลข transactionId ที่ SCB เพิ่งส่งมาให้",
  });
}

export function GET(): Response {
  return successResponse();
}

export function POST(): Response {
  return successResponse();
}
