export function GET(request) {
  return Response.json({
    env: process.env
   });
}

export async function POST(request) {
  const { email } = await request.json();
  return Response.json({
    email
   });
}