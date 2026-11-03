import { supabase } from "@/lib/supabase";

export async function GET() {
    try {
        const { data, error } = await supabase.rpc(
            "increment_profile_view",
            {
                p_username: "pranavsw",
            }
        );

        if (error || !data || data.length === 0) {
            console.error("SVG counter error:", error?.message);

            return new Response("Unable to generate counter", {
                status: 500,
            });
        }

        const { total_views, today_views } = data[0];

        // Format numbers with commas
        const total = Number(total_views).toLocaleString("en-IN");
        const today = Number(today_views).toLocaleString("en-IN");

        // Generate SVG
        const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="380"
            height="130"
            viewBox="0 0 380 130"
        >
            <rect
                width="380"
                height="130"
                fill="#000000"
            />

            <text
                x="20"
                y="30"
                fill="#ffffff"
                font-family="Arial, sans-serif"
                font-size="16"
                font-weight="600"
            >@ pranavsw</text>

            <text
                x="20"
                y="62"
                fill="#ffffff"
                font-family="Arial, sans-serif"
                font-size="12"
            >TOTAL VIEWS</text>

            <text
                x="20"
                y="100"
                fill="#ffffff"
                font-family="Arial, sans-serif"
                font-size="28"
                font-weight="bold"
            >${total}</text>

            <text
                x="210"
                y="62"
                fill="#ffffff"
                font-family="Arial, sans-serif"
                font-size="12"
            >TODAY VIEWS</text>

            <text
                x="210"
                y="100"
                fill="#ffffff"
                font-family="Arial, sans-serif"
                font-size="28"
                font-weight="bold"
            >${today}</text>
        </svg>
        `;

        return new Response(svg, {
            status: 200,
            headers: {
                "Content-Type": "image/svg+xml; charset=utf-8",
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
            },
        });

    } catch (error) {
        console.error("SVG generation failed:", error);

        return new Response("Internal server error", {
            status: 500,
        });
    }
}