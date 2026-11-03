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
        <svg xmlns="http://www.w3.org/2000/svg"
            width="760" height="260" viewBox="0 0 760 260">

        <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#17152e"/>
            <stop offset="100%" stop-color="#101c35"/>
            </linearGradient>

            <linearGradient id="purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#bd91ff"/>
            <stop offset="100%" stop-color="#7956df"/>
            </linearGradient>

            <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#79d9ff"/>
            <stop offset="100%" stop-color="#527bdc"/>
            </linearGradient>

            <linearGradient id="fur" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff3e9"/>
            <stop offset="100%" stop-color="#d7c8e9"/>
            </linearGradient>

            <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
            </filter>
        </defs>

        <!-- Background -->
        <rect width="760" height="260" rx="22" fill="url(#bg)"/>
        <rect x="1" y="1" width="758" height="258" rx="21"
                fill="none" stroke="#6652a5" stroke-opacity=".65"/>

        <!-- Stars -->
        <g fill="#d8c3ff">
            <circle cx="25" cy="32" r="2"/>
            <circle cx="76" cy="55" r="1.5"/>
            <circle cx="308" cy="29" r="2"/>
            <circle cx="340" cy="65" r="1.5"/>
            <path d="M286 43v10m-5-5h10" stroke="#c7a6ff"
                stroke-width="1.5"/>
            <path d="M713 31v12m-6-6h12" stroke="#9fdcff"
                stroke-width="1.5"/>
        </g>

        <!-- Small decorative plant -->
        <g transform="translate(38 72)">
            <path d="M20 75Q12 38 0 25M20 75Q38 35 48 20"
                fill="none" stroke="#71bd91" stroke-width="3"/>
            <ellipse cx="3" cy="25" rx="9" ry="17"
                    transform="rotate(-35 3 25)" fill="#64b98c"/>
            <ellipse cx="47" cy="20" rx="9" ry="17"
                    transform="rotate(35 47 20)" fill="#83d6a3"/>
            <ellipse cx="18" cy="47" rx="8" ry="14"
                    transform="rotate(-30 18 47)" fill="#498d76"/>
            <path d="M5 77h34l-5 13H10z" fill="#a77cdb"/>
            <path d="M10 77h24" stroke="#e3bdff" stroke-width="3"/>
        </g>

        <!-- Desk -->
        <path d="M15 215H745V239Q745 249 735 249H25Q15 249 15 239Z"
                fill="#302b53"/>
        <path d="M15 215H745" stroke="#9c80ec" stroke-width="2"/>
        <path d="M20 220H740" stroke="#6d5d9e" stroke-width="1"/>

        <!-- Cat body -->
        <ellipse cx="189" cy="194" rx="77" ry="39"
                fill="url(#fur)" stroke="#55456f" stroke-width="3"/>

        <!-- Cat tail -->
        <path d="M130 190Q83 199 91 159Q96 137 117 148"
                fill="none" stroke="#e9dced" stroke-width="15"
                stroke-linecap="round"/>
        <path d="M130 190Q83 199 91 159Q96 137 117 148"
                fill="none" stroke="#a99abf" stroke-width="5"
                stroke-linecap="round"/>

        <!-- Cat ears -->
        <path d="M135 112L127 64Q126 56 135 62L175 91Z"
                fill="#eee1f1" stroke="#675477" stroke-width="3"/>
        <path d="M219 92L255 62Q264 56 263 68L254 119Z"
                fill="#eee1f1" stroke="#675477" stroke-width="3"/>
        <path d="M138 91L135 75L157 94Z" fill="#f4a7bc"/>
        <path d="M238 94L256 75L252 101Z" fill="#f4a7bc"/>

        <!-- Cat head -->
        <ellipse cx="195" cy="137" rx="73" ry="65"
                fill="url(#fur)" stroke="#675477" stroke-width="3"/>

        <!-- Cat forehead stripes -->
        <path d="M169 78Q158 103 170 115M194 73Q185 94 193 105
                M220 81Q225 99 216 113"
                fill="none" stroke="#9a88aa" stroke-width="8"
                stroke-linecap="round"/>

        <!-- Cheeks -->
        <ellipse cx="155" cy="153" rx="17" ry="9"
                fill="#f5a7ba" opacity=".45"/>
        <ellipse cx="235" cy="153" rx="17" ry="9"
                fill="#f5a7ba" opacity=".45"/>

        <!-- Cat eyes -->
        <path d="M158 131Q166 119 176 131"
                fill="none" stroke="#342d42" stroke-width="4"
                stroke-linecap="round"/>
        <path d="M213 131Q223 119 232 131"
                fill="none" stroke="#342d42" stroke-width="4"
                stroke-linecap="round"/>

        <!-- Nose and smile -->
        <path d="M190 145Q195 140 200 145Q195 151 190 145"
                fill="#e88caa"/>
        <path d="M195 150Q187 161 180 153M195 150Q203 161 210 153"
                fill="none" stroke="#55445b" stroke-width="2.5"
                stroke-linecap="round"/>

        <!-- Whiskers -->
        <g stroke="#8b789a" stroke-width="1.7" stroke-linecap="round">
            <path d="M143 145L116 139M143 153L114 155"/>
            <path d="M247 145L274 139M247 153L276 155"/>
        </g>

        <!-- Headphones -->
        <path d="M119 135Q108 55 193 57Q272 56 269 135"
                fill="none" stroke="#41365f" stroke-width="13"
                stroke-linecap="round"/>
        <path d="M119 135Q108 55 193 57Q272 56 269 135"
                fill="none" stroke="#b08aff" stroke-width="4"
                stroke-linecap="round"/>

        <rect x="108" y="119" width="24" height="48" rx="10"
                fill="#65518d" stroke="#c3a1ff" stroke-width="3"/>
        <rect x="257" y="119" width="24" height="48" rx="10"
                fill="#65518d" stroke="#c3a1ff" stroke-width="3"/>
        <circle cx="120" cy="143" r="5" fill="#bda1ff"/>
        <circle cx="269" cy="143" r="5" fill="#bda1ff"/>

        <!-- Laptop -->
        <path d="M159 165Q159 159 166 159H260Q267 159 267 165V211H159Z"
                fill="#282441" stroke="#a78bfa" stroke-width="2.5"/>
        <path d="M148 212H278L290 221H138Z"
                fill="#8170ba" stroke="#b49cff" stroke-width="2"/>
        <path d="M195 215H231" stroke="#d8caff"
                stroke-width="2" stroke-linecap="round"/>

        <!-- Laptop logo -->
        <path d="M203 176L195 183L203 190M229 176L237 183L229 190
                M222 172L211 194"
                fill="none" stroke="#c7a6ff" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round"/>

        <!-- Coffee mug -->
        <g transform="translate(48 174)">
            <rect x="0" y="0" width="35" height="32" rx="5"
                fill="#d4a7ed" stroke="#f0d4ff" stroke-width="2"/>
            <path d="M35 7Q52 5 47 21Q44 29 35 26"
                fill="none" stroke="#d4a7ed" stroke-width="5"/>
            <path d="M10 -5Q4 -14 12 -21M23 -5Q17 -14 25 -21"
                fill="none" stroke="#c5b1e8" stroke-width="2"
                stroke-linecap="round"/>
            <path d="M11 13L17 19L23 13" fill="none"
                stroke="#75548d" stroke-width="2"/>
        </g>

        <!-- Right dashboard heading -->
        <text x="321" y="56" fill="#d8c3ff"
                font-family="monospace" font-size="19"
                font-weight="bold">~/ profile_views</text>
        <text x="321" y="77" fill="#8991b5"
                font-family="Arial, sans-serif" font-size="10"
                letter-spacing="2">A LITTLE VISIT COUNTER</text>

        <!-- Total views card -->
        <rect x="320" y="94" width="195" height="91" rx="14"
                fill="#292343" stroke="#9271dc" stroke-width="1.5"/>
        <circle cx="345" cy="119" r="11" fill="#a98aff" opacity=".2"/>
        <path d="M335 119Q345 107 355 119Q345 131 335 119Z"
                fill="none" stroke="#c3a5ff" stroke-width="1.8"/>
        <circle cx="345" cy="119" r="3" fill="#c3a5ff"/>
        <text x="365" y="123" fill="#c9b9ec"
                font-family="Arial, sans-serif" font-size="11"
                letter-spacing="1">TOTAL VIEWS</text>
        <text x="337" y="161" fill="#ffffff"
                font-family="Arial, sans-serif" font-size="30"
                font-weight="bold">${total}</text>

        <!-- Today views card -->
        <rect x="530" y="94" width="195" height="91" rx="14"
                fill="#1d3049" stroke="#679edc" stroke-width="1.5"/>
        <rect x="545" y="109" width="19" height="19" rx="3"
                fill="none" stroke="#7dd3fc" stroke-width="2"/>
        <path d="M545 116H564M550 105V112M559 105V112"
                stroke="#7dd3fc" stroke-width="2"
                stroke-linecap="round"/>
        <text x="575" y="123" fill="#b3d6ee"
                font-family="Arial, sans-serif" font-size="11"
                letter-spacing="1">TODAY VIEWS</text>
        <text x="547" y="161" fill="#ffffff"
                font-family="Arial, sans-serif" font-size="30"
                font-weight="bold">${today}</text>

        <!-- Bottom status -->
        <circle cx="334" cy="211" r="4" fill="#73e4ac"/>
        <text x="345" y="215" fill="#a6b6ce"
                font-family="Arial, sans-serif" font-size="11">
            Made with ♥ by pranavsw
        </text>

        <text x="718" y="215" fill="#9280bf"
                font-family="monospace" font-size="10"
                text-anchor="end">:3</text>

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