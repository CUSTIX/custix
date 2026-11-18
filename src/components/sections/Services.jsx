import { PROCESS, SERVICES } from "../../constants";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Scramble } from "../ui/Scramble";
import { Icon } from "../ui/Icon";

/** What a client can hire John for. Every offer links to a live demo they can try first. */
export const Services = () => (
  <section id="services" aria-labelledby="services-heading" className="cx-container pb-16 pt-6 md:pb-[110px] md:pt-10">
    <RevealOnScroll className="cx-section-head pb-[22px]">
      <h2 id="services-heading" className="m-0 font-sans font-bold tracking-[-0.028em] text-fg" style={{ fontSize: "clamp(24px, 2.4vw, 34px)" }}>
        Services
      </h2>
      <Scramble text="TRY IT BEFORE YOU HIRE" className="font-mono text-[10px] tracking-[0.24em] text-[#5b677a]" />
    </RevealOnScroll>
    <p className="m-0 mt-4 max-w-[640px] text-[15px] leading-[1.7] text-slate-300 md:mt-6">
      Every offer below already runs as a live demo. Open it, click around, then tell me what your business needs.
    </p>

    <ul className="m-0 mt-6 grid list-none gap-4 p-0 md:mt-8 md:grid-cols-2 md:gap-5">
      {SERVICES.map((s, i) => (
        <RevealOnScroll as="li" key={s.title} delay={i * 0.06}>
          <article className="group/svc relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-400/13 bg-panel/70 p-5 transition-[border-color,box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent-mid/35 hover:shadow-[0_30px_70px_-45px_rgba(37,99,235,0.8)] sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-mid/30 bg-accent-deep/15 text-accent-soft">
                <Icon name={s.icon} className="text-[20px]" />
              </span>
              <div className="min-w-0">
                <h3 className="m-0 font-sans text-[17px] font-semibold tracking-[-0.01em] text-fg">{s.title}</h3>
                <p className="m-0 mt-1 font-mono text-[10px] tracking-[0.16em] text-dim">{s.who.toUpperCase()}</p>
              </div>
            </div>
            <ul className="m-0 mt-5 list-none space-y-2 p-0">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 text-[14px] leading-[1.6] text-slate-300">
                  <Icon name="ri-check-line" className="mt-[3px] shrink-0 text-[15px] text-accent-mid" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={s.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent-mid/35 px-4 py-2 text-[13px] font-semibold text-accent-soft transition-colors duration-300 hover:border-accent-mid hover:bg-accent-deep/20 hover:text-white"
            >
              {s.demo.label}
              <Icon name="ri-arrow-right-up-line" className="text-[14px]" />
            </a>
          </article>
        </RevealOnScroll>
      ))}
    </ul>

    <RevealOnScroll className="mt-10 md:mt-14">
      <h3 className="m-0 font-mono text-[10px] tracking-[0.24em] text-dim">HOW WE&apos;D WORK TOGETHER</h3>
      <ol className="m-0 mt-4 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p) => (
          <li key={p.step} className="rounded-2xl border border-slate-400/10 bg-panel/50 p-5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-accent-mid">{p.step}</span>
            <h4 className="m-0 mt-2 text-[15px] font-semibold text-fg">{p.title}</h4>
            <p className="m-0 mt-1 text-[13.5px] leading-[1.6] text-slate-400">{p.text}</p>
          </li>
        ))}
      </ol>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-deep to-accent-mid px-6 py-3 text-[14px] font-semibold text-white shadow-[0_18px_40px_-20px_rgba(37,99,235,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        Book a free call
        <Icon name="ri-arrow-right-line" className="text-[16px]" />
      </a>
    </RevealOnScroll>
  </section>
);
