export async function GET() {
	console.log(process.env.VERCEL_PROJECT_ID);
  console.log(process.env.VERCEL_DEPLOY_HOOK_TOKEN)
  // try {
  //   const response = await fetch(
  //     `https://api.vercel.com/v1/projects/${process.env.VERCEL_PROJECT_ID}/deployments`, 
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${process.env.VERCEL_DEPLOY_HOOK_TOKEN}`,
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error('Deploy failed');
  //   }

  //   return new Response('Deploy triggered successfully', { status: 200 });
  // } catch (error) {
  //   return new Response('Deploy failed', { status: 500 });
  // }

	return Response.json({
		message: "Deploy triggered successfully",
		projectId: process.env.VERCEL_PROJECT_ID,
		deployHookToken: process.env.VERCEL_DEPLOY_HOOK_TOKEN,
	});
}
