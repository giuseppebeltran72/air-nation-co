import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-gray-100">
      {/* Segment 1: Title and Description */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold text-[#d4a373] md:text-6xl">Digital Gamification of Filipino Catholicism in the Roblox Community</h1>
        <p className="max-w-2xl text-xl">
          We explored how Filipino Catholicism on Roblox influences Filipino Catholics' faith, their sense of religious community, and the potential long-term impact of practicing Catholicism in virtual spaces in the Philippines.
        </p>
      </section>


      <section className="min-h-screen px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold text-[#d4a373]">What is Roblox?</h2>
        <div className="mx-auto grid grid-cols-2 max-w-6xl gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-relaxed">
              Roblox is a platform where users can both create their own games and explore a wide range of games developed by others.

              It features millions of user-generated virtual environments across different genres, including racing, role-playing, simulations, and obstacle challenges. The platform also enables users to trade, purchase, and design virtual items.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/game_statistics_ph_2024.png"
              alt="Vision illustration"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segment 3: Paragraph Right, Image Left */}
      <section className="min-h-screen px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold text-[#d4a373]">Catholicism in Roblox</h2>
        <div className="mx-auto grid grid-cols-2 max-w-6xl gap-8 items-center">
          <div>
            <p className="text-lg leading-relaxed">
              Roblox Filipino Catholics is an online religious community that brings Filipino Catholics together through the Roblox platform.
              <br /><br />
              By hosting virtual Masses, prayer gatherings, and faith-based roleplays, they creatively integrate Catholic practices into a digital space, making religion more accessible and engaging for younger audiences.
              <br /><br />
              With over 8.5K likes and 14K followers on Facebook, the group is actively shaping how faith is expressed and experienced in virtual communities.
            </p>
          </div>
          <div>
            <Image
              src="/images/roblox_pic1.jpg"
              alt="1st Image of the gamification of Filipino Catholicism in Roblox"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segment 4: Paragraph Left, Image Right */}
      <section className="min-h-screen px-4 py-20">
        <div className="mx-auto grid grid-cols-2 max-w-6xl gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-relaxed">
              This study employed a mixed-method approach, using both quantitative techniques such as Likert-scale survey and qualitative techniques like open-ended responses and synthesis of theories from various sources analyzed thematically.
              <br /><br />
              This triangulation analysis allowed the researchers for a comprehensive understanding of Roblox players' perceptions regarding the (1) authenticity, (2) communal impact, and (3) future implications of the digital gamification of Filipino Catholic faith.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/roblox_pic2.png"
              alt="2nd Image of the gamification of Filipino Catholicism in Roblox"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segment 5: Paragraph Right, Image Left */}
      <section className="min-h-screen px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold text-[#d4a373]">Authenticity</h2>
        <div className="mx-auto grid grid-cols-2 max-w-6xl gap-8 items-center"><div>
          <p className="text-lg leading-relaxed">
            Gamifying religion in Roblox becomes a fun, engaging, and interactive way to practice religion but it risks dissolving the genuineness of religion (McGonigal, 2011; Gibson, 2020; Miller, 2020; Campbell, 2017; Baudrillard, 1994; Merleau Ponty, 1962)
            <br /><br />
            Religion in Roblox promotes emotional connectedness (McGonigal, 2011; Tsuria, 2022) but it does not guarantee communal spiritual depth (Cohen, 2015; Durkheim, 1915); thus, resulting in a performance rather than genuine worship (Merleau Ponty, 1962).
          </p>
        </div>
          <div>
            <Image
              src="/images/table1.png"
              alt="Table of the results of the survey regarding the authenticity of Christian faith in Roblox"
              width={600}
              height={140}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segment 6: Paragraph Left, Image Right */}
      <section className="min-h-screen px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold text-[#d4a373]">Communal Impact</h2>
        <div className="mx-auto grid grid-cols-2 max-w-6xl gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-relaxed">
              From the thematic analysis, it shows that religious games can bring profit through selling religious items, content, and sponsorship (Master Sociology, n.d; Poulos, 2021; Pujianto et. al., 2024). With this, Roblox still has limited community standards with regards to religious contents (Johns, 2021; Dovich, 2017; Rizal & Vella, 2024).
            </p>
          </div>
          <div className="order-2 md:order-1">
            <Image
              src="/images/table2.png"
              alt="Table of the results of the survey regarding the communal impact of the digital gamification of Filipino Catholic faith"
              width={600}
              height={120}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segment 7: Paragraph Right, Image Left */}
      <section className="min-h-screen px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold text-[#d4a373]">“Digital gamification in Roblox is not totally for the purpose of devotion; rather, an invitation”</h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed">
              It is noteworthy that a subset of respondents particularly those affiliated with the Roblox Filipino Catholics community expressed strong agreement regarding its communal impact. Their responses suggest that this digital space is not merely a gathering of players, but rather a structured and purpose-driven community. From the perspective of those involved in managing or organizing the server, the platform serves a deeper function: it operates much like a religious organization, complete with committees assigned to roles such as evangelization, social contact, and community building.
              <br /><br />
              Furthermore, members of this community have reported that their interactions extend beyond the virtual world. Over time, they build real-life friendships and even gather physically for fellowship or worship, fostering bonds that are both social and spiritual. This evolution from digital play to spiritual connection challenges assumptions that religious gamification is superficial or inauthentic.
              <br /><br />
              While the majority of respondents may remain neutral about the communal value of such practices, their response shows that digital gamification, when intentionally organized, can indeed function as an invitation especially for young people. They do not expect players to be completely devoted during a 'misa' in the roblox server; rather, this gamification is more of a strategy to invite people to join their community and eventually create discourse in their group chat and bond virtually and physically.
            </p>
          </div>
        </div>
      </section>

      {/* Segment 8: Paragraph Left, Image Right */}
      <section className="min-h-screen px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-semibold text-[#d4a373]">Communal Impact</h2>
        <div className="mx-auto grid grid-cols-2 max-w-6xl gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-relaxed">
              In the future, the gamification of religion in Roblox may lead to a significant change to Filipino youth's building and strengthening core moral principles (Zaymaan, 2018) and a possibility of dissolving authority and power in the religious sector (Adaif & Toteff, 2016; Weber, 1920).
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/table3.png"
              alt="Table of the results of the survey regarding the future impacts of the digital gamification of Filipino Catholic faith"
              width={600}
              height={150}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Segment 9: Center-aligned Paragraph */}
      <section className="min-h-screen px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed">
            Exploring this culture has led this study to adopt a different perspective—one that does not further problematize it.
            <br /><br />
            A shift in perspective that its goal is actually to invite people rather than conducting a 'simulation' of religious practices changes how we view the significance of such social spaces.
            <br /><br />
            Instead of calling for the removal of such games due to concerns about authenticity or fears of weakening Filipino youth's values, we should advocate for reforms and stricter guidelines. In particular, Roblox should implement better systems to filter out players who mock or disrespect these communities, thereby preserving and strengthening their core: a genuine sense of religious community.
          </p>
        </div>
      </section>
    </main>
  )
}
