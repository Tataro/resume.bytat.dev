function successResponse(): Response {
  return Response.json({
    resCode: "00",
    resDesc: "success",
  });
}

export function GET(): Response {
  return successResponse();
}

export function POST(): Response {
  return successResponse();
}
