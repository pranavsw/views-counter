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
        
        const svg = `<svg xmlns="http://www.w3.org/2000/svg"
        width="900" height="350" viewBox="0 0 900 350"
        role="img" aria-label="Pranav's GitHub profile views">

        <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#211e43"/>
            <stop offset="1" stop-color="#10172e"/>
            </linearGradient>
            <linearGradient id="border" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#a855f7"/>
            <stop offset="1" stop-color="#528bff"/>
            </linearGradient>
            <linearGradient id="purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#c084fc"/>
            <stop offset="1" stop-color="#7045d9"/>
            </linearGradient>
            <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#67d3ff"/>
            <stop offset="1" stop-color="#5268df"/>
            </linearGradient>
            <linearGradient id="fur" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#c9c9e7"/>
            </linearGradient>
            <clipPath id="card">
            <rect x="1" y="1" width="898" height="348" rx="27"/>
            </clipPath>
        </defs>

        <rect width="900" height="350" rx="28" fill="url(#bg)"/>
        <rect x="2" y="2" width="896" height="346" rx="26"
            fill="none" stroke="url(#border)" stroke-width="2"/>

        <g clip-path="url(#card)">
            <circle cx="155" cy="190" r="135" fill="#7651c9" opacity=".19"/>

            <!-- Decorative stars -->
            <g fill="#f6c66b">
            <circle cx="76" cy="60" r="2"/>
            <circle cx="225" cy="48" r="2"/>
            <circle cx="390" cy="65" r="2"/>
            <circle cx="350" cy="105" r="3"/>
            </g>

            <!-- Plant -->
            <g stroke="#91b96d" stroke-width="4" stroke-linecap="round">
            <path d="M55 290 Q55 230 52 190"/>
            <path d="M55 250 Q22 225 25 205 Q51 208 55 250" fill="#9dc878"/>
            <path d="M54 230 Q83 194 102 203 Q91 230 54 230" fill="#a6d17c"/>
            <path d="M53 272 Q20 258 17 238 Q44 239 53 272" fill="#8dbb6b"/>
            <path d="M56 270 Q82 240 101 249 Q85 274 56 270" fill="#a6d17c"/>
            </g>
            <path d="M35 285 L78 285 L73 328 L40 328 Z" fill="#e9e7ff"/>
            <path d="M31 283 H82 V291 H31 Z" fill="#ffffff"/>

            <!-- Cat tail -->
            <path d="M142 287 C90 286 102 230 132 240
            C157 248 127 277 155 286"
            fill="#b8b4dc" stroke="#17152c" stroke-width="5"/>

            <!-- Cat body -->
            <path d="M126 292 C112 255 125 207 155 185
            C183 166 245 176 266 219
            C289 264 268 307 244 324
            L138 324 Z"
            fill="url(#fur)" stroke="#17152c" stroke-width="5"/>

            <!-- Cat ears -->
            <path d="M140 183 L137 116 Q140 91 160 111
            L194 148 Z"
            fill="url(#fur)" stroke="#17152c" stroke-width="5"/>
            <path d="M216 147 L248 111 Q266 94 271 119
            L269 184 Z"
            fill="url(#fur)" stroke="#17152c" stroke-width="5"/>
            <path d="M150 151 L150 125 L178 151 Z" fill="#f5a6bb"/>
            <path d="M237 151 L258 124 L259 157 Z" fill="#f5a6bb"/>

            <!-- Cat head -->
            <ellipse cx="204" cy="200" rx="80" ry="77"
            fill="url(#fur)" stroke="#17152c" stroke-width="5"/>

            <!-- Fur markings -->
            <path d="M180 135 Q193 156 184 175
            M208 125 Q220 151 211 173
            M235 136 Q243 154 239 173"
            fill="none" stroke="#8b88b6" stroke-width="10"
            stroke-linecap="round"/>

            <!-- Face -->
            <g fill="none" stroke="#17152c" stroke-width="5"
            stroke-linecap="round">
            <path d="M164 205 Q175 191 187 204"/>
            <path d="M220 204 Q232 191 244 205"/>
            <path d="M195 220 Q203 226 211 220"/>
            <path d="M203 222 Q194 239 184 229"/>
            <path d="M203 222 Q213 239 223 229"/>
            </g>
            <ellipse cx="203" cy="216" rx="5" ry="4" fill="#f58da9"/>
            <ellipse cx="161" cy="222" rx="17" ry="10" fill="#f49db4" opacity=".45"/>
            <ellipse cx="246" cy="222" rx="17" ry="10" fill="#f49db4" opacity=".45"/>

            <!-- Headphones -->
            <path d="M126 201 V171 Q126 104 204 104
            Q281 104 281 171 V201"
            fill="none" stroke="#17152c" stroke-width="13"
            stroke-linecap="round"/>
            <path d="M126 201 V171 Q126 111 204 111
            Q274 111 274 171 V201"
            fill="none" stroke="#9571e9" stroke-width="7"
            stroke-linecap="round"/>
            <rect x="113" y="172" width="29" height="67" rx="13"
            fill="#24213e" stroke="#111126" stroke-width="5"/>
            <rect x="267" y="172" width="29" height="67" rx="13"
            fill="#24213e" stroke="#111126" stroke-width="5"/>
            <circle cx="127" cy="205" r="9" fill="#c3a5ff"/>
            <circle cx="281" cy="205" r="9" fill="#c3a5ff"/>

            <!-- Laptop -->
            <path d="M180 255 Q180 248 188 248 H320
            Q328 248 326 256 L311 319 H167 Z"
            fill="#211c3b" stroke="#111126" stroke-width="5"/>
            <path d="M158 320 H328 Q334 320 334 325
            H151 Q151 320 158 320"
            fill="#9b75e9"/>
            <path d="M244 278 L255 268 L266 278
            M255 268 V292"
            fill="none" stroke="#c6a5ff" stroke-width="4"
            stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Coffee mug -->
            <rect x="340" y="281" width="37" height="42" rx="7"
            fill="#f3edff"/>
            <path d="M377 289 Q397 286 391 306 Q388 316 377 313"
            fill="none" stroke="#f3edff" stroke-width="6"/>
            <path d="M349 273 Q342 263 350 253
            M364 273 Q357 262 365 250"
            fill="none" stroke="#c4b2f5" stroke-width="3"
            stroke-linecap="round"/>

            <!-- Desk -->
            <path d="M15 327 Q175 321 407 327"
            fill="none" stroke="#8d64d9" stroke-width="4"
            stroke-linecap="round"/>

            <!-- Profile heading -->
            <g fill="#ffffff" font-family="Arial, Helvetica, sans-serif">
            <text x="445" y="92" font-size="31" font-weight="700">
                pranavsw
            </text>
            <text x="446" y="121" font-size="13" letter-spacing="6"
                fill="#bba7ff" font-weight="600">
                PROFILE VIEWS
            </text>
            </g>
            <path d="M445 132 H795" stroke="#5e58a0" stroke-width="1" opacity=".5"/>

            <!-- Total views -->
            <rect x="437" y="158" width="207" height="132" rx="18"
            fill="#30234f" fill-opacity=".55"
            stroke="url(#purple)" stroke-width="2.5"/>
            <circle cx="464" cy="188" r="10" fill="none"
            stroke="#c084fc" stroke-width="3"/>
            <circle cx="464" cy="188" r="3.5" fill="#c084fc"/>
            <text x="482" y="193" fill="#e9e3ff"
            font-size="16" font-family="Arial, sans-serif">
            Total Views
            </text>
            <text x="458" y="254" fill="#ffffff"
            font-size="39" font-weight="700"
            font-family="Arial, sans-serif">${total}</text>

            <!-- Today views -->
            <rect x="661" y="158" width="207" height="132" rx="18"
            fill="#202d52" fill-opacity=".55"
            stroke="url(#blue)" stroke-width="2.5"/>
            <rect x="684" y="177" width="19" height="20" rx="4"
            fill="none" stroke="#67d3ff" stroke-width="2.5"/>
            <path d="M684 184 H703 M690 174 V180 M698 174 V180"
            stroke="#67d3ff" stroke-width="2.5" stroke-linecap="round"/>
            <text x="715" y="193" fill="#e9f3ff"
            font-size="16" font-family="Arial, sans-serif">
            Today Views
            </text>
            <text x="682" y="254" fill="#ffffff"
            font-size="39" font-weight="700"
            font-family="Arial, sans-serif">${today}</text>

            <!-- Footer -->
            <text x="650" y="323" text-anchor="middle"
            fill="#777da8" font-size="10"
            font-family="Arial, sans-serif" letter-spacing="1.5">
            BUILT WITH ♥ BY PRANAV
            </text>
        </g>
        </svg>`;


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