export function GET(): Response {
  return Response.json({
    resCode: "00",
    resDesc: "success",
    transactionId: "เลข transactionId ที่ SCB เพิ่งส่งมาให้",
  });
}
