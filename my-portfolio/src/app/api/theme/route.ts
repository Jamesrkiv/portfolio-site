// app/api/theme/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { theme } = (await req.json()) as { theme: "light" | "dark" | "system" };
	const res = NextResponse.json({ ok: true });
	
	if (theme === "system") {
		res.cookies.delete("theme");
	}
	else {
		res.cookies.set("theme", theme, {
			path: "/",
			maxAge: 60 * 60 * 24 * 365, // 1 year
			sameSite: "lax",
		});
	}
	return res;
}