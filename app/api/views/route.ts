import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function GET() {
    try {
        const { data, error } = await supabase.rpc(
            "increment_profile_view",
            {
                p_username: "pranavsw",
            }
        );

        if (error) {
            console.error("Counter error:", error.message);

            return NextResponse.json(
                {
                    status: "error",
                    message: "Unable to update views",
                },
                { status: 500 }
            );
        }

        if (!data || data.length === 0) {
            return NextResponse.json(
                {
                    status: "error",
                    message: "Counter returned no data",
                },
                { status: 500 }
            );
        }

        const result = data[0];

        return NextResponse.json(
            {
                username: "pranavsw",
                total_views: result.total_views,
                today_views: result.today_views,
            },
            {
                headers: {
                    "Cache-Control": "no-store, max-age=0",
                },
            }
        );

    } catch (error) {
        console.error("Unexpected error:", error);

        return NextResponse.json(
            {
                status: "error",
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}