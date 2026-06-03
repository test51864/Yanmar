import { useMemo, useState } from "react";
import {
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Droplets,
  Factory,
  FileText,
  Gauge,
  Home,
  Image,
  Images,
  MapPin,
  Megaphone,
  PackageCheck,
  PenLine,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "ydg", label: "YDG Toolkit", icon: Zap },
  { id: "ydp", label: "YDP Toolkit", icon: Droplets },
  { id: "visuals", label: "Campaign Visuals", icon: Images },
  { id: "assets", label: "Content Assets", icon: FileText },
  { id: "activation", label: "Activation Plan", icon: CalendarDays },
  { id: "local", label: "Local Distributor Example", icon: MapPin },
  { id: "kpis", label: "Measurement / KPIs", icon: BarChart3 },
];

const toolkits = {
  ydg: {
    eyebrow: "YDG Toolkit",
    title: "YDG Diesel Generator Toolkit",
    intro:
      "Support materials for promoting Yanmar YDG diesel generators as reliable portable power solutions for professional users.",
    productLabel: "YDG Diesel Generators",
    icon: Zap,
    accent: "Power continuity",
    keyMessage:
      "Yanmar YDG diesel generators provide dependable portable power for professional applications where reliability, durability and operational continuity matter.",
    targetAudiences: [
      "Rental companies",
      "Construction companies",
      "Agriculture and rural businesses",
      "Event and outdoor operations",
      "Emergency and backup power users",
      "Industrial and maintenance teams",
    ],
    valueProposition:
      "YDG helps customers keep equipment, sites and operations powered when access to reliable electricity is limited or unavailable.",
    benefits: [
      "Reliable Yanmar diesel engine",
      "Portable and practical power support",
      "Suitable for demanding environments",
      "Useful across multiple professional applications",
      "Strong fit for rental and distributor promotion",
    ],
    visuals: [
      {
        title: "Product shot",
        description: "Clean YDG product image on a neutral background.",
      },
      {
        title: "Application scene",
        description: "YDG in a realistic outdoor or worksite setting.",
      },
      {
        title: "Marketing visual",
        description:
          "Campaign-ready visual for LinkedIn, website or distributor promotion.",
      },
    ],
  },
  ydp: {
    eyebrow: "YDP Toolkit",
    title: "YDP Diesel Pump Toolkit",
    intro:
      "Support materials for promoting Yanmar YDP diesel pumps as fast and dependable dewatering solutions.",
    productLabel: "YDP Diesel Pumps",
    icon: Droplets,
    accent: "Dewatering response",
    keyMessage:
      "Yanmar YDP diesel pumps provide fast and dependable dewatering support when water disrupts access, work or operations.",
    targetAudiences: [
      "Rental companies",
      "Construction and infrastructure companies",
      "Facility managers",
      "Municipal and public works teams",
      "Industrial sites and warehouses",
      "Agriculture and water management users",
      "Emergency response and flood support teams",
    ],
    valueProposition:
      "YDP helps customers remove unwanted water quickly, reduce downtime and keep work areas accessible.",
    benefits: [
      "Fast water removal",
      "Reliable diesel performance",
      "Strong pumping capability",
      "Practical for flooding and water management",
      "Easy to deploy in demanding conditions",
      "Suitable for campaign-ready visual communication",
    ],
    visuals: [
      {
        title: "Product shot",
        description: "Clear YDP product image showing the diesel pump.",
      },
      {
        title: "Application scene",
        description: "YDP in action during flooding or dewatering.",
      },
      {
        title: "Marketing visual",
        description:
          "Campaign visual such as 'Water, handled in order.' or 'When flooding gets in the way, YDP gets work moving again.'",
      },
    ],
  },
};

const campaigns = [
  {
    title: "Water, handled in order.",
    product: "YDP",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "Water appears to queue toward the pump, showing controlled and organized dewatering.",
  },
  {
    title: "No parking for unwanted water.",
    product: "YDP",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "A flooded parking space receives a visual 'parking ticket', while the YDP removes the water.",
  },
  {
    title: "Every hour underwater counts.",
    product: "YDP",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "A large puddle subtly forms the shape of a clock, linking dewatering to downtime reduction.",
  },
  {
    title: "Rain has a cost. YDP helps control it.",
    product: "YDP",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "A rain receipt visual shows the operational cost of rainfall and the value of fast response.",
  },
  {
    title: "Make a way through the water.",
    product: "YDP",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "A dry path is created through a flooded area, showing YDP as a solution that restores access.",
  },
  {
    title: "Water doesn't belong here. YDP does.",
    product: "YDP",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "A facility entrance or service area affected by water, with YDP positioned as the practical solution.",
  },
  {
    title: "A full lot, ready to work.",
    product: "YDG",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "A parking lot filled with YDG generators instead of cars, showing availability and readiness.",
  },
  {
    title: "Power where the work happens.",
    product: "YDG",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "YDG placed in a realistic field or worksite setting to show portable power support.",
  },
  {
    title: "Ready when the grid isn't.",
    product: "YDG",
    channel: "LinkedIn, website, flyer, distributor email",
    description:
      "YDG positioned as reliable backup and off-grid power for professional use.",
  },
];

const assets = [
  {
    name: "Brochure",
    purpose: "Explains product features and applications.",
    distributorUse: "Send to leads, print for sales visits, share after inquiries.",
    icon: FileText,
  },
  {
    name: "Datasheet",
    purpose: "Provides technical specifications.",
    distributorUse: "Support sales conversations and product comparison.",
    icon: ClipboardList,
  },
  {
    name: "LinkedIn post",
    purpose: "Activates product visibility online.",
    distributorUse: "Copy, localize and publish on distributor channels.",
    icon: PenLine,
  },
  {
    name: "Campaign visual",
    purpose: "Creates attention and communicates product value quickly.",
    distributorUse:
      "Use on LinkedIn, website banners, email and sales presentations.",
    icon: Image,
  },
  {
    name: "Comparison sheet",
    purpose: "Helps explain value compared with alternatives.",
    distributorUse: "Use in sales conversations and distributor training.",
    icon: Gauge,
  },
  {
    name: "Price list",
    purpose: "Supports commercial follow-up.",
    distributorUse:
      "Use internally or with qualified leads depending on market policy.",
    icon: PackageCheck,
  },
  {
    name: "Application video",
    purpose: "Shows the product in real-use situations.",
    distributorUse: "Use on LinkedIn, website, exhibitions and sales follow-up.",
    icon: Megaphone,
  },
];

const activationWeeks = [
  {
    week: "Week 1",
    activity: "Product awareness post",
    description:
      "Publish a LinkedIn post introducing YDG or YDP with a clear product benefit.",
    targetAudience:
      "Professional buyers, existing customers and distributor followers.",
    channel: "LinkedIn",
    materialNeeded: "Campaign visual + post copy",
    successIndicator: "Post published, reach and engagement tracked.",
  },
  {
    week: "Week 2",
    activity: "Application-focused content",
    description:
      "Share a use-case visual showing how the product solves a practical customer problem.",
    targetAudience: "Rental, construction, facility or agriculture customers.",
    channel: "LinkedIn, website or email",
    materialNeeded: "Application visual + short explanation",
    successIndicator: "Clicks, comments, inquiries or sales team feedback.",
  },
  {
    week: "Week 3",
    activity: "Sales follow-up",
    description:
      "Send brochure, datasheet or comparison sheet to relevant leads and customers.",
    targetAudience: "Qualified prospects and existing customers.",
    channel: "Email and sales contact",
    materialNeeded: "Brochure, datasheet, comparison sheet",
    successIndicator: "Number of leads contacted and follow-up conversations.",
  },
  {
    week: "Week 4",
    activity: "Local availability / demo push",
    description:
      "Communicate local product availability, demo possibility or contact option.",
    targetAudience: "Customers with practical need or seasonal urgency.",
    channel: "LinkedIn, email, sales team and website",
    materialNeeded: "Local CTA, product image, contact details",
    successIndicator: "Inquiries, quote requests or demo interest.",
  },
];

const kpis = [
  {
    name: "Toolkit adoption",
    target:
      "At least 3 European distributors use the toolkit during the first activation period.",
    measurement: "Downloads, usage confirmation or distributor feedback.",
    icon: Users,
  },
  {
    name: "Marketing activity",
    target:
      "Participating distributors execute at least 2 marketing activities using toolkit materials.",
    measurement:
      "Published LinkedIn posts, website updates, email campaigns or sales material usage.",
    icon: Megaphone,
  },
  {
    name: "Usability rating",
    target:
      "At least 60% of participating distributors rate the materials as usable and applicable.",
    measurement: "Short distributor feedback form.",
    icon: CheckCircle2,
  },
  {
    name: "Content localization",
    target:
      "Distributors adapt at least one campaign asset to their local market.",
    measurement: "Localized post, translated caption or market-specific visual.",
    icon: MapPin,
  },
  {
    name: "Sales team support",
    target:
      "Sales teams use brochures, datasheets or comparison sheets in customer follow-up.",
    measurement: "Sales feedback and number of leads contacted.",
    icon: TrendingUp,
  },
];

function App() {
  const [activePage, setActivePage] = useState("home");

  const activeLabel = useMemo(
    () => navItems.find((item) => item.id === activePage)?.label ?? "Home",
    [activePage],
  );

  function navigate(pageId) {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-yanmar-soft text-yanmar-dark">
      <div className="border-b border-white/70 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-yanmar-red text-white shadow-sm transition group-hover:bg-black">
              <Factory size={22} />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-yanmar-red">
                Yanmar
              </span>
              <span className="block text-lg font-bold leading-tight">
                Distributor Toolkit Hub
              </span>
            </span>
          </button>
          <div className="hidden items-center gap-2 rounded-full border border-yanmar-line bg-white px-4 py-2 text-sm font-semibold text-neutral-600 shadow-sm md:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-yanmar-red" />
            {activeLabel}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <nav className="rounded-lg border border-yanmar-line bg-white p-2 shadow-card">
            <div className="px-3 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                Toolkit navigation
              </p>
            </div>
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  item={item}
                  isActive={activePage === item.id}
                  onClick={() => navigate(item.id)}
                />
              ))}
            </div>
          </nav>
        </aside>

        <main className="min-w-0">
          {activePage === "home" && (
            <HomePage onNavigate={navigate} toolkits={toolkits} />
          )}
          {activePage === "ydg" && <ToolkitPage toolkit={toolkits.ydg} />}
          {activePage === "ydp" && <ToolkitPage toolkit={toolkits.ydp} />}
          {activePage === "visuals" && <CampaignVisualsPage />}
          {activePage === "assets" && <ContentAssetsPage />}
          {activePage === "activation" && <ActivationPlanPage />}
          {activePage === "local" && <LocalDistributorPage />}
          {activePage === "kpis" && <KpiPage />}
        </main>
      </div>
    </div>
  );
}

function NavButton({ item, isActive, onClick }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-12 items-center justify-between gap-3 rounded-md px-3 py-3 text-left text-sm font-semibold transition ${
        isActive
          ? "bg-yanmar-red text-white shadow-sm"
          : "text-neutral-700 hover:bg-neutral-100 hover:text-yanmar-dark"
      }`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <Icon
          size={18}
          className={isActive ? "text-white" : "text-neutral-500 group-hover:text-yanmar-red"}
        />
        <span className="truncate">{item.label}</span>
      </span>
      <ChevronRight
        size={16}
        className={`shrink-0 transition ${isActive ? "text-white" : "text-neutral-300 group-hover:text-yanmar-red"}`}
      />
    </button>
  );
}

function PageShell({ eyebrow, title, intro, children, action }) {
  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-yanmar-line bg-white p-6 shadow-dashboard md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-yanmar-red">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-bold tracking-normal text-yanmar-dark md:text-4xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg">
                {intro}
              </p>
            )}
          </div>
          {action}
        </div>
      </div>
      {children}
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-yanmar-line bg-white shadow-dashboard">
        <div className="grid gap-0 lg:grid-cols-[1fr_380px]">
          <div className="p-6 md:p-9 lg:p-10">
            <p className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yanmar-red">
              YDG / YDP distributor support
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-yanmar-dark md:text-5xl">
              Distributor Toolkit Hub
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              Ready-to-use marketing and communication support for distributors
              promoting Yanmar YDG and YDP products.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ProductEntryCard
                title="YDG Diesel Generators"
                description="Support materials for promoting reliable portable power solutions across construction, rental, agriculture, events and emergency applications."
                icon={Zap}
                onClick={() => onNavigate("ydg")}
              />
              <ProductEntryCard
                title="YDP Diesel Pumps"
                description="Support materials for promoting fast and dependable dewatering solutions for flooding, facilities, construction, agriculture and industrial sites."
                icon={Droplets}
                onClick={() => onNavigate("ydp")}
              />
            </div>
          </div>

          <div className="border-t border-yanmar-line bg-neutral-950 p-6 text-white lg:border-l lg:border-t-0 lg:p-8">
            <div className="flex h-full min-h-[320px] flex-col justify-between rounded-md border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-200">
                  Toolkit status
                </p>
                <h2 className="mt-4 text-2xl font-bold">
                  Ready for distributor activation
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  A single hub for campaign direction, localization, sales
                  support and measurement.
                </p>
              </div>
              <div className="mt-8 grid gap-3">
                {[
                  ["Products", "YDG + YDP"],
                  ["Format", "Front-end prototype"],
                  ["Audience", "Distributor marketing and sales teams"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                      {label}
                    </p>
                    <p className="mt-1 font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoPanel
        eyebrow="Why this toolkit exists"
        title="Practical support for distributors with limited marketing capacity"
        text="Distributors often have limited marketing capacity and need clear, practical and ready-to-use materials. This toolkit brings product messages, visual examples, campaign assets and activation guidance together in one accessible hub."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Faster campaign activation",
            text: "Use prepared messages, visuals and channel guidance to move from idea to publication faster.",
            icon: CalendarDays,
          },
          {
            title: "More consistent product communication",
            text: "Keep YDG and YDP value propositions clear across distributor markets and channels.",
            icon: Target,
          },
          {
            title: "Easier localization for distributors",
            text: "Adapt campaign examples, copy and sales materials to fit local contexts and priorities.",
            icon: MapPin,
          },
        ].map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}

function ProductEntryCard({ title, description, icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group min-h-[230px] rounded-lg border border-yanmar-line bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-yanmar-red hover:shadow-card"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-yanmar-red transition group-hover:bg-yanmar-red group-hover:text-white">
        <Icon size={24} />
      </div>
      <h2 className="mt-5 text-xl font-bold text-yanmar-dark">{title}</h2>
      <p className="mt-3 leading-7 text-neutral-600">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-yanmar-red">
        Open toolkit <ChevronRight size={16} />
      </span>
    </button>
  );
}

function ToolkitPage({ toolkit }) {
  const Icon = toolkit.icon;

  return (
    <PageShell eyebrow={toolkit.eyebrow} title={toolkit.title} intro={toolkit.intro}>
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <SectionCard
            label="Key message"
            title="Core communication line"
            icon={Megaphone}
          >
            <p className="text-xl font-semibold leading-8 text-yanmar-dark">
              {toolkit.keyMessage}
            </p>
          </SectionCard>

          <SectionCard
            label="Value proposition"
            title="Customer value"
            icon={Target}
          >
            <p className="text-lg leading-8 text-neutral-700">
              {toolkit.valueProposition}
            </p>
          </SectionCard>

          <SectionCard label="Key visuals" title="Image placeholders" icon={Images}>
            <div className="grid gap-4 md:grid-cols-3">
              {toolkit.visuals.map((visual) => (
                <PlaceholderImageCard
                  key={visual.title}
                  title={visual.title}
                  description={visual.description}
                  productLabel={toolkit.productLabel}
                />
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-yanmar-line bg-white p-6 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-yanmar-red">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
                  Product focus
                </p>
                <h2 className="font-bold text-yanmar-dark">{toolkit.productLabel}</h2>
              </div>
            </div>
            <div className="mt-5 rounded-md bg-neutral-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-yanmar-red">
                Campaign angle
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                {toolkit.accent}
              </p>
            </div>
          </div>

          <SectionCard label="Target audiences" title="Who to reach" icon={Users}>
            <List items={toolkit.targetAudiences} />
          </SectionCard>

          <SectionCard label="Benefits" title="Reasons to promote" icon={CheckCircle2}>
            <List items={toolkit.benefits} />
          </SectionCard>
        </div>
      </div>
    </PageShell>
  );
}

function CampaignVisualsPage() {
  return (
    <PageShell
      eyebrow="Campaign Visuals"
      title="Campaign concept gallery"
      intro="A gallery of campaign-ready directions that distributors can localize for LinkedIn, websites, flyers and email campaigns."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.title} campaign={campaign} />
        ))}
      </div>
    </PageShell>
  );
}

function ContentAssetsPage() {
  return (
    <PageShell
      eyebrow="Content Assets"
      title="Distributor content asset library"
      intro="Ready-to-use content formats that help distributors activate product communication and support sales follow-up."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {assets.map((asset) => (
          <AssetCard key={asset.name} asset={asset} />
        ))}
      </div>
    </PageShell>
  );
}

function ActivationPlanPage() {
  return (
    <PageShell
      eyebrow="Activation Plan"
      title="4-week distributor activation plan"
      intro="A practical four-week rhythm for turning toolkit content into visible distributor activity."
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {activationWeeks.map((week) => (
          <ActivationWeekCard key={week.week} week={week} />
        ))}
      </div>
    </PageShell>
  );
}

function LocalDistributorPage() {
  return (
    <PageShell
      eyebrow="Local Distributor Example"
      title="Local Distributor Example: Abdullah Hashim Company LTD"
      intro="This example shows how a distributor can localize the YDP toolkit for a regional flooding and dewatering context."
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="rounded-lg border border-yanmar-line bg-white p-6 shadow-card md:p-8">
          <div className="mb-6 flex items-center gap-3 border-b border-yanmar-line pb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yanmar-red text-white">
              <Building2 size={23} />
            </div>
            <div>
              <p className="font-bold text-yanmar-dark">Abdullah Hashim Company LTD</p>
              <p className="text-sm text-neutral-500">Localized LinkedIn post mock-up</p>
            </div>
          </div>

          <div className="space-y-4 text-base leading-8 text-neutral-700">
            <p>
              Flooding can quickly disrupt access, slow operations and create
              costly downtime.
            </p>
            <p>
              At Abdullah Hashim Company LTD, we support customers with Yanmar
              YDP diesel pumps designed for fast and dependable dewatering.
            </p>
            <p>
              When water gets in the way, reliable equipment helps get work
              moving again.
            </p>
          </div>

          <p className="mt-6 rounded-md bg-neutral-50 p-4 text-sm font-semibold leading-7 text-neutral-700">
            #AbdullahHashimCompany #Yanmar #YDP #Dewatering #FloodResponse
            #DieselPump #WaterManagement #SaudiArabia #IndustrialEquipment
          </p>
        </div>

        <div className="rounded-lg border border-yanmar-line bg-white p-5 shadow-card">
          <div className="rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-5">
            {/* Replace this placeholder with the localized YDP flooding campaign visual. */}
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-md bg-white p-6 text-center">
              <Droplets size={38} className="text-yanmar-red" />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">
                Insert localized flooding visual here
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight text-yanmar-dark">
                When flooding gets in the way, YDP gets work moving again.
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Reliable dewatering support from Abdullah Hashim Company LTD and
                Yanmar.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Recommended visual: YDP pump actively removing water from a flooded
            industrial road, warehouse area or municipal service route in a
            GCC/Saudi context.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

function KpiPage() {
  return (
    <PageShell
      eyebrow="Measurement / KPIs"
      title="Measurement and KPI Framework"
      intro="The toolkit should be evaluated based on distributor adoption, content usage and practical marketing activation, not only direct sales outcomes."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.name} kpi={kpi} />
        ))}
      </div>
    </PageShell>
  );
}

function InfoPanel({ eyebrow, title, text }) {
  return (
    <div className="rounded-lg border border-yanmar-line bg-white p-6 shadow-card md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-yanmar-red">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold text-yanmar-dark">{title}</h2>
      <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-600">{text}</p>
    </div>
  );
}

function SectionCard({ label, title, icon: Icon, children }) {
  return (
    <section className="rounded-lg border border-yanmar-line bg-white p-6 shadow-card">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yanmar-red">
            {label}
          </p>
          <h2 className="mt-2 text-xl font-bold text-yanmar-dark">{title}</h2>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50 text-yanmar-red">
          <Icon size={20} />
        </div>
      </div>
      {children}
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-700">
          <CheckCircle2 className="mt-0.5 shrink-0 text-yanmar-red" size={17} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlaceholderImageCard({ title, description, productLabel }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-yanmar-line bg-neutral-50 transition hover:-translate-y-1 hover:border-yanmar-red hover:shadow-card">
      {/* Insert the real product, application or campaign image in this placeholder area. */}
      <div className="flex aspect-[4/3] flex-col items-center justify-center bg-[repeating-linear-gradient(135deg,#f3f4f6_0,#f3f4f6_10px,#ffffff_10px,#ffffff_20px)] p-5 text-center">
        <Image className="text-yanmar-red" size={34} />
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
          Image placeholder
        </p>
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-yanmar-red">
          {productLabel}
        </p>
        <h3 className="mt-2 font-bold text-yanmar-dark">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
      </div>
    </article>
  );
}

function CampaignCard({ campaign }) {
  const isYdp = campaign.product === "YDP";

  return (
    <article className="group overflow-hidden rounded-lg border border-yanmar-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-yanmar-red hover:shadow-card">
      {/* Insert finalized campaign artwork for this concept in this placeholder area. */}
      <div className="relative flex aspect-[16/10] items-center justify-center bg-neutral-100 p-5">
        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-yanmar-red shadow-sm">
          {campaign.product}
        </div>
        <div className="text-center">
          {isYdp ? (
            <Droplets size={38} className="mx-auto text-yanmar-red" />
          ) : (
            <Zap size={38} className="mx-auto text-yanmar-red" />
          )}
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Campaign visual placeholder
          </p>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold leading-snug text-yanmar-dark">
          {campaign.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {campaign.description}
        </p>
        <div className="mt-4 rounded-md bg-neutral-50 p-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
            Suggested channel
          </p>
          <p className="mt-1 text-sm font-semibold text-neutral-700">
            {campaign.channel}
          </p>
        </div>
      </div>
    </article>
  );
}

function AssetCard({ asset }) {
  const Icon = asset.icon;

  return (
    <article className="rounded-lg border border-yanmar-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-yanmar-red hover:shadow-card">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-red-50 text-yanmar-red">
          <Icon size={21} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
            Asset
          </p>
          <h2 className="mt-1 text-lg font-bold text-yanmar-dark">{asset.name}</h2>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <DetailBlock label="Purpose" text={asset.purpose} />
        <DetailBlock label="Distributor use" text={asset.distributorUse} />
      </div>
    </article>
  );
}

function ActivationWeekCard({ week }) {
  const fields = [
    ["Target audience", week.targetAudience],
    ["Channel", week.channel],
    ["Material needed", week.materialNeeded],
    ["Success indicator", week.successIndicator],
  ];

  return (
    <article className="rounded-lg border border-yanmar-line bg-white p-5 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yanmar-red">
            {week.week}
          </p>
          <h2 className="mt-2 text-xl font-bold text-yanmar-dark">
            {week.activity}
          </h2>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50 text-yanmar-red">
          <CalendarDays size={20} />
        </div>
      </div>
      <p className="mt-4 leading-7 text-neutral-600">{week.description}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {fields.map(([label, text]) => (
          <DetailBlock key={label} label={label} text={text} />
        ))}
      </div>
    </article>
  );
}

function KpiCard({ kpi }) {
  const Icon = kpi.icon;

  return (
    <article className="rounded-lg border border-yanmar-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-yanmar-red hover:shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-yanmar-red">
        <Icon size={21} />
      </div>
      <h2 className="mt-5 text-lg font-bold text-yanmar-dark">{kpi.name}</h2>
      <div className="mt-4 space-y-4">
        <DetailBlock label="Target" text={kpi.target} />
        <DetailBlock label="Measurement" text={kpi.measurement} />
      </div>
    </article>
  );
}

function BenefitCard({ title, text, icon: Icon }) {
  return (
    <article className="rounded-lg border border-yanmar-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yanmar-red hover:shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-yanmar-red">
        <Icon size={21} />
      </div>
      <h2 className="mt-5 text-lg font-bold text-yanmar-dark">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
    </article>
  );
}

function DetailBlock({ label, text }) {
  return (
    <div className="rounded-md bg-neutral-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-neutral-700">{text}</p>
    </div>
  );
}

export default App;
