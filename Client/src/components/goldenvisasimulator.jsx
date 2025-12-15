'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
 import {
  AlertCircle,
  Calculator,
  ShieldCheck,
  TrendingUp,
  FileText,
  Info,
  Flag,
  Users,
  LineChart,
  Mail,
  Phone,
  Copy,
  MessageCircle,
  CalendarClock,
  Check
} from "lucide-react";

// ---------------------------------------------
// Small helpers
// ---------------------------------------------
const fmt = (n) => new Intl.NumberFormat('en-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);
const pct = (n) => `${(Number(n) || 0).toFixed(2)}%`;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// ---------------------------------------------
// Cost Simulator (Legalization & Gov fees)
// ---------------------------------------------
const CostSimulator = () => {
  const [people, setPeople] = useState({ main: 1, spouse: 0, children: 0, parents: 0 });
  const totalPeople = useMemo(() => people.main + people.spouse + people.children + people.parents, [people]);

  // Default, editable assumptions (purely indicative) - users can overwrite
  const [assumptions, setAssumptions] = useState({
    govFeeMain: 5325, // € per main applicant (placeholder)
    govFeeDependent: 2663, // € per dependent (placeholder)
    biometricsPerPerson: 533, // € per card issuance/biometrics (placeholder)
    aimaCardPerPerson: 159, // € printing/card cost (placeholder)
    translations: 600, // € total translations
    docsPerPerson: 250, // € apostilles / certificates per person
    legalFlat: 6500, // € legal advisory (flat, example only)
    vat: 23, // % VAT where applicable (example PT standard rate)
    contingencyPct: 7.5, // % buffer for extras
  });

  const updateAssumption = (key, value) => setAssumptions((s) => ({ ...s, [key]: Number(value) || 0 }));
  const updatePeople = (key, value) => setPeople((p) => ({ ...p, [key]: clamp(parseInt(value || '0', 10) || 0, 0, 10) }));

  const totals = useMemo(() => {
    const dependents = totalPeople - 1; // everyone except main
    const gov = assumptions.govFeeMain * people.main + assumptions.govFeeDependent * dependents;
    const biometrics = assumptions.biometricsPerPerson * totalPeople;
    const cards = assumptions.aimaCardPerPerson * totalPeople;
    const docs = assumptions.docsPerPerson * totalPeople;
    const base = gov + biometrics + cards + docs + assumptions.translations + assumptions.legalFlat;

    // VAT typically applies to services (e.g., legal, translations), not gov fees - simplified split
    const vatBase = assumptions.legalFlat + assumptions.translations;
    const vat = (vatBase * (assumptions.vat / 100));

    const subtotal = base + vat;
    const contingency = subtotal * (assumptions.contingencyPct / 100);
    const grandTotal = subtotal + contingency;

    return { gov, biometrics, cards, docs, vat, contingency, grandTotal, subtotal, base };
  }, [assumptions, totalPeople, people.main]);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="w-5 h-5" /> Golden Visa Legalization Cost Simulator (Indicative)
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Adjust the assumptions below. All values are placeholders for educational purposes - contact your legal advisor for an exact quote.
        </p>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Household</h4>
            <div className="grid grid-cols-2 gap-3">
              {['main','spouse','children','parents'].map((k) => (
                <label key={k} className="text-sm grid gap-1">
                  <span className="capitalize">{k}</span>
                  <Input type="number" min={k==='main'?1:0} value={people[k]} onChange={(e)=>updatePeople(k, e.target.value)} />
                </label>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total people: <strong>{totalPeople}</strong></p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-2">Editable Assumptions</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <label className="grid gap-1">Gov fee (main) <Input type="number" value={assumptions.govFeeMain} onChange={(e)=>updateAssumption('govFeeMain', e.target.value)} /></label>
              <label className="grid gap-1">Gov fee (dependent) <Input type="number" value={assumptions.govFeeDependent} onChange={(e)=>updateAssumption('govFeeDependent', e.target.value)} /></label>
              <label className="grid gap-1">Biometrics / person <Input type="number" value={assumptions.biometricsPerPerson} onChange={(e)=>updateAssumption('biometricsPerPerson', e.target.value)} /></label>
              <label className="grid gap-1">Card issue / person <Input type="number" value={assumptions.aimaCardPerPerson} onChange={(e)=>updateAssumption('aimaCardPerPerson', e.target.value)} /></label>
              <label className="grid gap-1">Docs / person <Input type="number" value={assumptions.docsPerPerson} onChange={(e)=>updateAssumption('docsPerPerson', e.target.value)} /></label>
              <label className="grid gap-1">Translations (flat) <Input type="number" value={assumptions.translations} onChange={(e)=>updateAssumption('translations', e.target.value)} /></label>
              <label className="grid gap-1">Legal advisory (flat) <Input type="number" value={assumptions.legalFlat} onChange={(e)=>updateAssumption('legalFlat', e.target.value)} /></label>
              <label className="grid gap-1">VAT (%) <Input type="number" value={assumptions.vat} onChange={(e)=>updateAssumption('vat', e.target.value)} /></label>
              <label className="grid gap-1">Contingency buffer (%) <Input type="number" value={assumptions.contingencyPct} onChange={(e)=>updateAssumption('contingencyPct', e.target.value)} /></label>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="space-y-4">
          <div className="p-4 border rounded-xl bg-card">
            <div className="flex items-center gap-2 mb-2"><ShieldCheck className="w-4 h-4" /><span className="text-sm font-semibold">Breakdown (indicative)</span></div>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between"><span>Government fees</span><strong>{fmt(totals.gov)}</strong></li>
              <li className="flex justify-between"><span>Biometrics</span><strong>{fmt(totals.biometrics)}</strong></li>
              <li className="flex justify-between"><span>Card issuance</span><strong>{fmt(totals.cards)}</strong></li>
              <li className="flex justify-between"><span>Documents</span><strong>{fmt(totals.docs)}</strong></li>
              <li className="flex justify-between"><span>Translations</span><strong>{fmt(assumptions.translations)}</strong></li>
              <li className="flex justify-between"><span>Legal advisory</span><strong>{fmt(assumptions.legalFlat)}</strong></li>
              <li className="flex justify-between"><span>VAT (services)</span><strong>{fmt(totals.vat)}</strong></li>
              <Separator className="my-2" />
              <li className="flex justify-between"><span>Subtotal</span><strong>{fmt(totals.subtotal)}</strong></li>
              <li className="flex justify-between"><span>Contingency</span><strong>{fmt(totals.contingency)}</strong></li>
            </ul>
            <div className="mt-3 p-3 rounded-lg bg-muted flex items-center justify-between">
              <span className="text-sm font-semibold">Estimated Total</span>
              <span className="text-lg font-extrabold">{fmt(totals.grandTotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 flex items-start gap-2"><AlertCircle className="w-4 h-4 mt-0.5"/> This simulator is for guidance only and does not constitute legal or tax advice. Government fees can change and vary by case.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ---------------------------------------------
// ROI Simulator (Explorer-style fund, indicative only)
// ---------------------------------------------
const RoiSimulator = () => {
  const [principal, setPrincipal] = useState(500000);
  const [years, setYears] = useState(5);
  const [grossReturn, setGrossReturn] = useState(8); // % annual gross
  const [mgmtFee, setMgmtFee] = useState(1.5); // % of AUM per year
  const [carryPct, setCarryPct] = useState(10); // % of profits over hurdle
  const [subFeePct, setSubFeePct] = useState(1); // one-time subscription %
  const [hurdle, setHurdle] = useState(6); // % annual hurdle

  // Scenario presets
  const presets = {
    Conservative: { grossReturn: 6, mgmtFee: 1.75, carryPct: 10, years: 5 },
    Base: { grossReturn: 8, mgmtFee: 1.5, carryPct: 10, years: 5 },
    Ambitious: { grossReturn: 12, mgmtFee: 1.5, carryPct: 15, years: 6 },
  };

  const applyPreset = (k) => {
    const p = presets[k];
    setGrossReturn(p.grossReturn); setMgmtFee(p.mgmtFee); setCarryPct(p.carryPct); setYears(p.years);
  };

  const results = useMemo(() => {
    const subFee = principal * (subFeePct/100);
    const invested = principal - subFee; // initial after sub fee

    // Net annual after management fee (simplified):
    const netAnnual = (grossReturn/100) - (mgmtFee/100);
    const finalBeforeCarry = invested * Math.pow(1 + netAnnual, years);
    const grossProfit = finalBeforeCarry - principal; // profit relative to original principal

    // Hurdle baseline (profit above this may be subject to carry)
    const hurdleValue = principal * Math.pow(1 + (hurdle/100), years);
    const hurdleProfit = Math.max(0, hurdleValue - principal);
    const excessProfit = Math.max(0, (finalBeforeCarry - principal) - hurdleProfit);
    const carry = excessProfit * (carryPct/100);

    const finalAfterCarry = finalBeforeCarry - carry;
    const netProfit = finalAfterCarry - principal;

    const moic = finalAfterCarry / principal;
    const irr = years > 0 ? (Math.pow(finalAfterCarry / principal, 1/years) - 1) : 0;

    return { subFee, invested, finalBeforeCarry, grossProfit, hurdleValue, excessProfit, carry, finalAfterCarry, netProfit, moic, irr };
  }, [principal, years, grossReturn, mgmtFee, carryPct, subFeePct, hurdle]);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 text-xl">
          <LineChart className="w-5 h-5" /> Golden Visa Fund ROI Simulator (Illustrative)
        </CardTitle>
        <p className="text-sm text-muted-foreground">Estimate potential outcomes for a €500k investment in a regulated fund. These are <strong>illustrative only</strong> and not a promise of performance.</p>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <label className="grid gap-1">Investment (€)
              <Input type="number" value={principal} onChange={(e)=>setPrincipal(Math.max(0, Number(e.target.value||0)))} />
            </label>
            <label className="grid gap-1">Years
              <Input type="number" value={years} onChange={(e)=>setYears(Math.max(1, parseInt(e.target.value||'1',10)))} />
            </label>
            <label className="grid gap-1">Gross annual return (%)
              <Input type="number" step="0.1" value={grossReturn} onChange={(e)=>setGrossReturn(Number(e.target.value||0))} />
            </label>
            <label className="grid gap-1">Mgmt fee / year (%)
              <Input type="number" step="0.1" value={mgmtFee} onChange={(e)=>setMgmtFee(Number(e.target.value||0))} />
            </label>
            <label className="grid gap-1">Performance fee on excess (%)
              <Input type="number" step="0.1" value={carryPct} onChange={(e)=>setCarryPct(Number(e.target.value||0))} />
            </label>
            <label className="grid gap-1">Subscription fee (once, %)
              <Input type="number" step="0.1" value={subFeePct} onChange={(e)=>setSubFeePct(Number(e.target.value||0))} />
            </label>
            <label className="grid gap-1">Hurdle rate (%)
              <Input type="number" step="0.1" value={hurdle} onChange={(e)=>setHurdle(Number(e.target.value||0))} />
            </label>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {Object.keys(presets).map((k) => (
              <Button key={k} variant="secondary" size="sm" onClick={()=>applyPreset(k)}>{k}</Button>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-muted/60 text-xs text-muted-foreground flex gap-2"><Info className="w-4 h-4 mt-0.5"/> For simplicity, returns compound annually net of management fees; performance fee applies to profits above a hurdle at exit.</div>
        </div>

        {/* Outputs */}
        <div className="space-y-4">
          <div className="p-4 border rounded-xl bg-card">
            <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-4 h-4" /><span className="text-sm font-semibold">Projected Results</span></div>
            <ul className="text-sm space-y-1">
              <li className="flex justify-between"><span>Subscription fee (one-time)</span><strong>{fmt(results.subFee)}</strong></li>
              <li className="flex justify-between"><span>Capital actually invested</span><strong>{fmt(results.invested)}</strong></li>
              <li className="flex justify-between"><span>Final value before carry</span><strong>{fmt(results.finalBeforeCarry)}</strong></li>
              <li className="flex justify-between"><span>Carry (performance fee)</span><strong>-{fmt(results.carry)}</strong></li>
              <Separator className="my-2" />
              <li className="flex justify-between"><span>Final value after fees</span><strong>{fmt(results.finalAfterCarry)}</strong></li>
              <li className="flex justify-between"><span>Net profit</span><strong>{fmt(results.netProfit)}</strong></li>
              <li className="flex justify-between"><span>Net MOIC</span><strong>{results.moic.toFixed(2)}x</strong></li>
              <li className="flex justify-between"><span>Net annualized IRR</span><strong>{pct(results.irr*100)}</strong></li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ---------------------------------------------
// Main Article Component (SEO-optimized)
// ---------------------------------------------
const GoldenVisaSEOPage = () => {
 

 
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
 

 
      <section  id="DivSimulation" className="bg-white text-[#002741] px-4 sm:px-6 py-12 sm:py-16 max-w-screen-xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.header initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Portugal Golden Visa 2025: The Fund Route Explained (with Two Live Simulators)
            </h1>
            <p className="text-base sm:text-lg text-[#15364A]">
              Real estate is out of the spotlight. In 2025, <strong>CMVM-regulated investment funds</strong> are the most practical path for Portugal’s Golden Visa. This guide covers what changed, who qualifies, and how costs and potential returns might look - with <strong>two interactive simulators</strong> you can tailor to your family and strategy.
            </p>
            <nav aria-label="Table of contents" className="mt-6 border border-[#E4E0CF] rounded-xl p-4 bg-[#FFFCF3]">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><FileText className="w-5 h-5 text-[#B4A77E]"/> Contents</h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
             {[{id:'eligibility',label:'Golden Visa Today: Who Qualifies?'},{id:'process',label:'How the Fund Route Works'},{id:'costs',label:'Simulator: Legalization Costs'},{id:'returns',label:'Simulator: Fund ROI (Illustrative)'},{id:'faq',label:'FAQs'},{id:'contact',label:'Talk to Explorer Investments'}].map(i=> (
                  <li key={i.id}><button onClick={()=>scrollTo(i.id)} className="text-[#002741] hover:underline">{i.label}</button></li>
                ))}
              </ul>
            </nav>
          </motion.header>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="bg-[#F9FAFB] py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-5 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-[#B4A77E]"/> Golden Visa Today: Who Qualifies?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Subscribe ≥ €500,000</strong> in an eligible, CMVM-regulated fund.</li>
            <li><strong>Maintain</strong> the investment for ~5 years and meet minimal stay requirements.</li>
            <li>Spouse, dependent children, and (in specific cases) dependent parents can be included.</li>
            <li>Leads to <strong>permanent residency</strong> and potentially citizenship, subject to language and legal checks.</li>
          </ul>
          <p className="text-xs text-muted-foreground">Regulatory frameworks evolve; verify the latest rules with a qualified advisor before investing.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-5 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><Flag className="w-6 h-6 text-[#B4A77E]"/> How the Fund Route Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Shortlist</strong> CMVM-regulated managers and request fund documents (PPM, KID/KIIDs, audited track record).</li>
            <li><strong>Due diligence</strong>: strategy, governance, fees (management/carry), liquidity, lock-ups, auditor, custodian.</li>
            <li><strong>Subscribe</strong> (usually €500k+), complete KYC/AML, and receive proof of subscription for your application.</li>
            <li><strong>File & biometrics</strong>: submit the ARI/Golden Visa file, attend biometrics, and receive residence cards if approved.</li>
            <li><strong>Maintain & renew</strong> until eligible for permanent residency/citizenship.</li>
          </ol>
        </div>
      </section>

      {/* COST SIMULATOR */}
      <section id="costs" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><Calculator className="w-6 h-6 text-[#B4A77E]"/> Simulator: Legalization Costs</h2>
          <CostSimulator />
        </div>
      </section>

      {/* ROI SIMULATOR */}
      <section id="returns" className="py-12 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><LineChart className="w-6 h-6 text-[#B4A77E]"/> Simulator: Fund ROI (Illustrative)</h2>
          <RoiSimulator />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><FileText className="w-6 h-6 text-[#B4A77E]"/> Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="mt-4 space-y-1">
  <AccordionItem value="q1">
    <AccordionTrigger>What is Portugal’s Golden Visa and how does it work?</AccordionTrigger>
    <AccordionContent>It’s a residency-by-investment program allowing non-EU nationals to obtain Portuguese residency through qualifying investments - notably in regulated funds - leading to EU citizenship eligibility after 5 years.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q2">
    <AccordionTrigger>What are the investment options available in 2025?</AccordionTrigger>
    <AccordionContent>Real estate routes have largely been phased out. The main options include regulated investment funds (≥€500k), research, cultural contributions, and capital transfers.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q3">
    <AccordionTrigger>How long does it take to get approved?</AccordionTrigger>
    <AccordionContent>Most applicants receive approval within 4-8 months after completing investment and submitting biometrics, depending on SEF/AIMA processing times.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q4">
    <AccordionTrigger>Can my family apply with me?</AccordionTrigger>
    <AccordionContent>Yes. Spouse, dependent children, and dependent parents can be included under one application, sharing the same residency benefits.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q5">
    <AccordionTrigger>How long must I keep my investment?</AccordionTrigger>
    <AccordionContent>At least five years from the date of approval. Early withdrawal could result in losing residency status.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q6">
    <AccordionTrigger>Can I work, study, or start a business in Portugal with a Golden Visa?</AccordionTrigger>
    <AccordionContent>Yes, Golden Visa holders enjoy full residency rights, including work, study, and business freedom across Portugal and Schengen mobility.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q7">
    <AccordionTrigger>What are the main benefits?</AccordionTrigger>
    <AccordionContent>Visa-free Schengen travel, minimal stay, family inclusion, EU healthcare access, education rights, and eventual citizenship eligibility.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q8">
    <AccordionTrigger>What are the risks of investing via funds?</AccordionTrigger>
    <AccordionContent>Market risk, illiquidity, and manager performance. Choose CMVM-regulated, independently audited funds to minimize exposure.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q9">
    <AccordionTrigger>Do I need to pay taxes in Portugal?</AccordionTrigger>
    <AccordionContent>Residency doesn’t automatically make you tax resident. If you live over 183 days per year, you may qualify for the Non-Habitual Resident (NHR) regime offering tax benefits.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q10">
    <AccordionTrigger>Can I finance the €500,000 investment?</AccordionTrigger>
    <AccordionContent>No. The qualifying amount must be from your own funds, transferred from abroad. Loans inside Portugal don’t count toward eligibility.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q11">
    <AccordionTrigger>Does the Golden Visa lead to citizenship?</AccordionTrigger>
    <AccordionContent>Yes, after 5 years of legal residency and passing a basic Portuguese language test, you may apply for citizenship.</AccordionContent>
  </AccordionItem>

  <AccordionItem value="q12">
    <AccordionTrigger>What happens if rules change while I’m invested?</AccordionTrigger>
    <AccordionContent>Existing applications are usually protected under transitional rules. Always confirm current legislation before investing.</AccordionContent>
  </AccordionItem>
</Accordion>

        </div>
      </section>

 <section id="contact" className="bg-[#002741] text-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Left: Heading + Value Prop + Quick CTA */}
      <div>
        <h2 className="text-3xl font-bold mb-3">Talk to Explorer Investments</h2>
        <p className="text-white/80">
          Speak with our Investor Relations team about the Golden Visa fund route, documentation, timelines, and next steps.
        </p>

        {/* Fast actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="bg-[#B4A77E] hover:bg-[#9c9067] text-[#0b1b28] font-semibold">
            <Link href="/">Book a Free Strategy Session</Link>
          </Button>
          <a
            href="https://wa.me/351939046691?text=Hello%20Explorer%20Investments%2C%20I%27d%20like%20to%20discuss%20the%20Golden%20Visa%20fund%20route."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href="tel:+351939046691"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition"
            aria-label="Call Explorer Investments"
          >
            <Phone className="w-4 h-4" /> +351 939 046 691
          </a>
        </div>

        <p className="mt-3 text-xs text-white/60 flex items-center gap-2">
          <CalendarClock className="w-4 h-4" />
          Typical reply time: under 24h (business days)
        </p>
      </div>

      {/* Right: Contact Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* André */}
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
              <img
                src="https://goldenvisashub.com/assets/images/andre_2025.jpg"
                alt="André Bandeira"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-semibold leading-tight">André Bandeira</p>
              <p className="text-xs text-white/70">Investor Relations</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <a
              href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
         className="flex items-center gap-2 text-[#B4A77E] hover:underline break-all"
  style={{ fontSize: "0.6875rem" }} // ~11px
            >
              <Mail className="w-4 h-4" /> ab@explorerinvestments.com
            </a>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button asChild variant="secondary" className="bg-white text-[#002741] hover:bg-white/90">
                <a href="mailto:ab@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website">
                  Email André
                </a>
              </Button>
              <a
                href="https://wa.me/351939046691?text=Hi%20Andr%C3%A9%2C%20I%27d%20like%20to%20discuss%20the%20Golden%20Visa%20fund%20route."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText('ab@explorerinvestments.com');
                    const el = document.getElementById('copied-andre');
                    if (el) { el.classList.remove('opacity-0'); setTimeout(() => el.classList.add('opacity-0'), 1200); }
                  } catch {}
                }}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                <Copy className="w-4 h-4" /> Copy email
              </button>
              <span id="copied-andre" className="inline-flex items-center gap-1 text-xs text-emerald-300 transition-opacity opacity-0">
                <Check className="w-3 h-3" /> Copied
              </span>
            </div>
          </div>
        </div>

        {/* Maria */}
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
              <img
                src="https://goldenvisashub.com/assets/images/maria_2025.jpg"
                alt="Maria Campos Silva"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-semibold leading-tight">Maria Campos Silva</p>
              <p className="text-xs text-white/70">Investor Relations</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <a
              href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website"
  className="flex items-center gap-2 text-[#B4A77E] hover:underline break-all"
  style={{ fontSize: "0.6875rem" }} // ~11px

            >
              <Mail className="w-4 h-4" /> mcs@explorerinvestments.com
            </a>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button asChild variant="secondary" className="bg-white text-[#002741] hover:bg-white/90">
                <a href="mailto:mcs@explorerinvestments.com?subject=Golden%20Visa%20Investment%20Inquiry%20from%20Website">
                  Email Maria
                </a>
              </Button>
              <a
                href="https://wa.me/351939046691?text=Hi%20Maria%2C%20I%27d%20like%20to%20discuss%20the%20Golden%20Visa%20fund%20route."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText('mcs@explorerinvestments.com');
                    const el = document.getElementById('copied-maria');
                    if (el) { el.classList.remove('opacity-0'); setTimeout(() => el.classList.add('opacity-0'), 1200); }
                  } catch {}
                }}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm hover:bg-white/10 transition"
              >
                <Copy className="w-4 h-4" /> Copy email
              </button>
              <span id="copied-maria" className="inline-flex items-center gap-1 text-xs text-emerald-300 transition-opacity opacity-0">
                <Check className="w-3 h-3" /> Copied
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why funds box */}
      <div className="mt-10 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
        <h3 className="font-semibold">Why funds (not property)?</h3>
        <ul className="mt-3 text-sm space-y-1 list-disc pl-5 text-white/90">
          <li>Regulated structure (CMVM), audited, with independent custodian</li>
          <li>Diversification across assets vs. single-unit risk</li>
          <li>Lower physical overhead vs. property management</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Legal disclaimer */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 text-xs text-muted-foreground">
          <p>
            <strong>Disclaimer:</strong> This page is informational and does not constitute legal, tax, or investment advice. All simulator outputs are estimates based on user-entered assumptions and simplified models. Fees, regulations, and terms may change. Seek independent professional advice and verify eligibility before proceeding.
          </p>
        </div>
      </section>
    </>
  );
};

export default GoldenVisaSEOPage;
