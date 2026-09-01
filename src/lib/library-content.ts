/**
 * Single source of truth for The Napoleon Library.
 * Timeline, campaigns, marshals, quotes, analysis and the bibliography all
 * live here so the interactive sections and the search index never drift apart.
 */

export type Source = {
  id: string;
  author: string;
  title: string;
  year: string;
  publisher: string;
  url?: string;
  category: "Biography" | "Campaigns" | "Reform & Law" | "Exile & Death" | "Quotes & Primary Sources";
  note?: string;
};

export const sources: Source[] = [
  {
    id: "roberts-2014",
    author: "Roberts, Andrew",
    title: "Napoleon: A Life",
    year: "2014",
    publisher: "Viking / Penguin",
    category: "Biography",
    note: "Single-volume biography drawing on the full published correspondence (33,000+ letters).",
  },
  {
    id: "englund-2004",
    author: "Englund, Steven",
    title: "Napoleon: A Political Life",
    year: "2004",
    publisher: "Harvard University Press",
    category: "Biography",
    note: "Focuses on Napoleon as a political actor rather than only as a commander.",
  },
  {
    id: "broers-2014",
    author: "Broers, Michael",
    title: "Napoleon: Soldier of Destiny",
    year: "2014",
    publisher: "Faber & Faber",
    category: "Biography",
  },
  {
    id: "chandler-1966",
    author: "Chandler, David G.",
    title: "The Campaigns of Napoleon",
    year: "1966",
    publisher: "Macmillan",
    category: "Campaigns",
    note: "The standard operational study of Napoleon's battles and marches.",
  },
  {
    id: "zamoyski-2004",
    author: "Zamoyski, Adam",
    title: "Moscow 1812: Napoleon's Fatal March",
    year: "2004",
    publisher: "HarperCollins",
    category: "Campaigns",
  },
  {
    id: "hofschroer-1998",
    author: "Hofschröer, Peter",
    title: "1815: The Waterloo Campaign",
    year: "1998",
    publisher: "Greenhill Books",
    category: "Campaigns",
  },
  {
    id: "britannica-napoleon",
    author: "Encyclopædia Britannica",
    title: "Napoleon I, Emperor of France",
    year: "current edition",
    publisher: "Encyclopædia Britannica, Inc.",
    url: "https://www.britannica.com/biography/Napoleon-I",
    category: "Biography",
  },
  {
    id: "britannica-code",
    author: "Encyclopædia Britannica",
    title: "Napoleonic Code",
    year: "current edition",
    publisher: "Encyclopædia Britannica, Inc.",
    url: "https://www.britannica.com/topic/Napoleonic-Code",
    category: "Reform & Law",
  },
  {
    id: "woolf-1991",
    author: "Woolf, Stuart",
    title: "Napoleon's Integration of Europe",
    year: "1991",
    publisher: "Routledge",
    category: "Reform & Law",
  },
  {
    id: "dwyer-2013",
    author: "Dwyer, Philip",
    title: "Citizen Emperor: Napoleon in Power",
    year: "2013",
    publisher: "Yale University Press",
    category: "Reform & Law",
    note: "Critical account of censorship, policing and the 1802 restoration of colonial slavery.",
  },
  {
    id: "las-cases-1823",
    author: "Las Cases, Emmanuel de",
    title: "Mémorial de Sainte-Hélène",
    year: "1823",
    publisher: "Paris",
    category: "Exile & Death",
    note: "Napoleon's own dictated account of exile — invaluable, but self-serving and shaped for posterity.",
  },
  {
    id: "unwin-2010",
    author: "Unwin, Brian",
    title: "Terrible Exile: The Last Days of Napoleon on St Helena",
    year: "2010",
    publisher: "I.B. Tauris",
    category: "Exile & Death",
  },
  {
    id: "correspondance",
    author: "Fondation Napoléon",
    title: "Correspondance générale de Napoléon Bonaparte",
    year: "2004–2018",
    publisher: "Fayard",
    url: "https://www.napoleon.org",
    category: "Quotes & Primary Sources",
    note: "The critical edition of Napoleon's letters — the benchmark for verifying any quotation.",
  },
  {
    id: "louvre-david",
    author: "Musée du Louvre",
    title: "Collection notices: Jacques-Louis David and imperial portraiture",
    year: "current edition",
    publisher: "Musée du Louvre",
    url: "https://collections.louvre.fr",
    category: "Quotes & Primary Sources",
  },
];

export function sourceById(id: string) {
  return sources.find((s) => s.id === id);
}

export type TimelineEvent = {
  year: string;
  date: string;
  title: string;
  summary: string;
  detail: string;
  significance: string;
  sourceIds: string[];
};

export const timeline: TimelineEvent[] = [
  {
    year: "1769",
    date: "15 August 1769",
    title: "Born in Ajaccio",
    summary: "Napoleone Buonaparte is born in Corsica, a year after the island passes to France.",
    detail:
      "He was the second surviving son of Carlo Buonaparte, a lawyer of minor Italian nobility, and Letizia Ramolino. He grew up speaking Corsican and Italian, and learned French only at school.",
    significance:
      "His Corsican birth made him an outsider in France, a status that sharpened his ambition and shaped how contemporaries saw him.",
    sourceIds: ["roberts-2014", "britannica-napoleon"],
  },
  {
    year: "1779",
    date: "1779–1784",
    title: "Military school at Brienne",
    summary: "Sent to mainland France at nine, he studies at the military academy of Brienne-le-Château.",
    detail:
      "Mocked for his accent and poverty, he retreated into mathematics, geography and history — the subjects that later underpinned his artillery skill and strategic planning.",
    significance:
      "A scholarship education gave a provincial boy access to the French officer corps at the exact moment the Revolution was about to open every rank to talent.",
    sourceIds: ["roberts-2014", "broers-2014"],
  },
  {
    year: "1785",
    date: "September 1785",
    title: "Commissioned as an artillery officer",
    summary: "He graduates from the École Militaire in Paris as a second lieutenant of artillery at sixteen.",
    detail:
      "Artillery was the most technical and least aristocratic branch of the army, one of the few open to a man without wealth or court connections.",
    significance:
      "Artillery became his signature weapon: massed guns decided Friedland, Wagram and Waterloo's opening hours.",
    sourceIds: ["chandler-1966"],
  },
  {
    year: "1793",
    date: "December 1793",
    title: "Siege of Toulon",
    summary: "His artillery plan drives the British fleet from Toulon and wins him a general's rank at twenty-four.",
    detail:
      "He identified the promontory of L'Éguillette as the key to the harbour; once French guns held it, the Anglo-Spanish fleet had to withdraw and the royalist city fell.",
    significance:
      "First national recognition, and the beginning of his patronage relationship with the Revolutionary government.",
    sourceIds: ["chandler-1966", "roberts-2014"],
  },
  {
    year: "1795",
    date: "5 October 1795",
    title: "13 Vendémiaire in Paris",
    summary: "He disperses a royalist rising against the Convention with artillery — later nicknamed the 'whiff of grapeshot'.",
    detail:
      "Called in by Paul Barras, he had guns brought up from the Sablons camp and cleared the streets around the Tuileries within hours.",
    significance:
      "It made him indispensable to the new Directory and won him command of the Army of the Interior, then of Italy.",
    sourceIds: ["englund-2004", "roberts-2014"],
  },
  {
    year: "1796",
    date: "1796–1797",
    title: "The Italian campaign",
    summary: "An underfed French army defeats Piedmont and Austria in a string of victories.",
    detail:
      "Lodi, Castiglione, Arcole and Rivoli were won by speed and concentration against separated Austrian columns. The Treaty of Campo Formio ended the war on French terms.",
    significance:
      "It created the Napoleonic method — divide, march fast, concentrate at the decisive point — and made him a national hero at twenty-seven.",
    sourceIds: ["chandler-1966"],
  },
  {
    year: "1798",
    date: "1798–1799",
    title: "The Egyptian expedition",
    summary: "He invades Egypt to threaten Britain's route to India; the fleet is destroyed at the Nile.",
    detail:
      "He won at the Pyramids but Nelson annihilated the French fleet at Aboukir Bay, stranding the army. The accompanying scientific commission discovered the Rosetta Stone in 1799.",
    significance:
      "A strategic failure that nevertheless built his legend, and launched modern Egyptology.",
    sourceIds: ["chandler-1966", "britannica-napoleon"],
  },
  {
    year: "1799",
    date: "9–10 November 1799",
    title: "Coup of 18 Brumaire",
    summary: "He overthrows the Directory and becomes First Consul of France.",
    detail:
      "Working with Sieyès and his brother Lucien, he dissolved the legislature at Saint-Cloud and installed a consulate in which he held real power.",
    significance:
      "The political end of the French Revolution and the start of one-man rule dressed in republican language.",
    sourceIds: ["englund-2004", "dwyer-2013"],
  },
  {
    year: "1801",
    date: "15 July 1801",
    title: "Concordat with Pope Pius VII",
    summary: "He ends the religious conflict of the Revolution without surrendering state control.",
    detail:
      "Catholicism was recognised as the religion of the great majority of French citizens; the state kept the right to nominate bishops and retained church lands sold during the Revolution.",
    significance:
      "It reconciled Catholic France to the new regime and removed one of the Revolution's most destabilising quarrels.",
    sourceIds: ["woolf-1991", "britannica-napoleon"],
  },
  {
    year: "1804",
    date: "21 March 1804 / 2 December 1804",
    title: "Civil Code, then Empire",
    summary: "The Civil Code is promulgated in March; in December he crowns himself Emperor at Notre-Dame.",
    detail:
      "The Code's 2,281 articles guaranteed equality before the law, secular civil status and property rights — while sharply restricting the legal position of married women. At the coronation, Pope Pius VII attended but Napoleon placed the crown on his own head.",
    significance:
      "The Code outlived the Empire and still underpins the civil law of dozens of countries; the coronation announced that his authority came from the French people, not the Church.",
    sourceIds: ["britannica-code", "roberts-2014"],
  },
  {
    year: "1805",
    date: "2 December 1805",
    title: "Battle of Austerlitz",
    summary: "He destroys an Austro-Russian army on the anniversary of his coronation.",
    detail:
      "He deliberately weakened his right to tempt the Allies off the Pratzen Heights, then seized the emptied heights with Soult's corps and cut their army in two.",
    significance:
      "The Third Coalition collapsed; Austria signed the Peace of Pressburg and the Holy Roman Empire was dissolved the following year.",
    sourceIds: ["chandler-1966", "roberts-2014"],
  },
  {
    year: "1806",
    date: "14 October 1806",
    title: "Jena and Auerstedt",
    summary: "Two battles on one day shatter Prussia.",
    detail:
      "Napoleon beat a Prussian secondary force at Jena while Davout, heavily outnumbered, defeated the main Prussian army at Auerstedt. French troops entered Berlin on 27 October.",
    significance:
      "The reputation of Frederick the Great's army was destroyed, triggering the Prussian reform movement that would return at Waterloo.",
    sourceIds: ["chandler-1966"],
  },
  {
    year: "1807",
    date: "7 July 1807",
    title: "Treaty of Tilsit",
    summary: "After Friedland, he meets Tsar Alexander I on a raft in the Niemen and divides Europe.",
    detail:
      "Russia joined the Continental System against British trade, Prussia lost half its territory, and the Duchy of Warsaw was created.",
    significance:
      "The high point of the Empire — and the origin of the economic quarrel that would drag him into Russia five years later.",
    sourceIds: ["roberts-2014", "chandler-1966"],
  },
  {
    year: "1808",
    date: "1808–1814",
    title: "The Peninsular War begins",
    summary: "He installs his brother Joseph in Spain and provokes a national insurrection.",
    detail:
      "Guerrilla warfare combined with Wellington's British army bled French forces continuously for six years.",
    significance:
      "Napoleon himself called it his 'Spanish ulcer' — a permanent drain that he never resolved.",
    sourceIds: ["chandler-1966", "broers-2014"],
  },
  {
    year: "1812",
    date: "June – December 1812",
    title: "The Russian campaign",
    summary: "The Grande Armée reaches Moscow and is destroyed on the retreat.",
    detail:
      "Around 600,000 men crossed the Niemen. Borodino opened the road to Moscow, but the burnt city brought no peace, and hunger, typhus and frost annihilated the army on the way back.",
    significance:
      "The catastrophe broke French military dominance and convinced the rest of Europe that he could be beaten.",
    sourceIds: ["zamoyski-2004"],
  },
  {
    year: "1813",
    date: "16–19 October 1813",
    title: "Battle of Leipzig",
    summary: "The Battle of the Nations drives France out of Germany.",
    detail:
      "Austria, Prussia, Russia and Sweden fought together over four days. A bridge over the Elster was blown too early, stranding thousands of French troops.",
    significance:
      "The largest battle in Europe before 1914 and the end of the Confederation of the Rhine.",
    sourceIds: ["chandler-1966"],
  },
  {
    year: "1814",
    date: "6 April 1814",
    title: "First abdication and Elba",
    summary: "With Allied armies in Paris, he abdicates and is exiled to Elba.",
    detail:
      "The Treaty of Fontainebleau left him sovereign of Elba with a pension and a small guard while the Bourbons returned to France.",
    significance:
      "A settlement generous enough to keep him alive — and near enough to France for him to come back.",
    sourceIds: ["roberts-2014"],
  },
  {
    year: "1815",
    date: "18 June 1815",
    title: "The Hundred Days and Waterloo",
    summary: "He returns from Elba, rules for about a hundred days, and is defeated at Waterloo.",
    detail:
      "He attacked Wellington's Anglo-Allied army south of Brussels, hoping to beat it before Blücher's Prussians arrived. The Prussians reached the field in the late afternoon and the French line broke.",
    significance:
      "It ended twenty-three years of European war and closed the Napoleonic era for good.",
    sourceIds: ["hofschroer-1998", "roberts-2014"],
  },
  {
    year: "1821",
    date: "5 May 1821",
    title: "Death on Saint Helena",
    summary: "He dies in British captivity in the South Atlantic, most probably of stomach cancer.",
    detail:
      "The autopsy recorded a diseased stomach; his father had died of a similar condition. Arsenic-poisoning theories persist but are not accepted by most historians.",
    significance:
      "His remains were returned to Paris in 1840 and now rest beneath the dome of Les Invalides.",
    sourceIds: ["unwin-2010", "las-cases-1823"],
  },
];

export type Campaign = {
  id: string;
  name: string;
  years: string;
  location: string;
  opponents: string;
  result: "French victory" | "French defeat" | "Strategic failure" | "Mixed";
  significance: string;
  /** Percentage coordinates on the stylised map (0–100). */
  x: number;
  y: number;
  sourceIds: string[];
};

export const campaigns: Campaign[] = [
  {
    id: "italy",
    name: "Italian Campaign",
    years: "1796–1797",
    location: "Piedmont and Lombardy, northern Italy",
    opponents: "Austria and the Kingdom of Sardinia-Piedmont",
    result: "French victory",
    significance:
      "Lodi, Arcole and Rivoli forced Austria to the Treaty of Campo Formio and turned an unknown general into a national figure.",
    x: 50,
    y: 70,
    sourceIds: ["chandler-1966"],
  },
  {
    id: "egypt",
    name: "Egyptian Campaign",
    years: "1798–1799",
    location: "Egypt and Syria (Ottoman territory)",
    opponents: "The Ottoman Empire, the Mamluks and Great Britain",
    result: "Strategic failure",
    significance:
      "Victory at the Pyramids was undone by Nelson's destruction of the French fleet at the Nile; the scientific mission produced the Rosetta Stone.",
    x: 74,
    y: 92,
    sourceIds: ["chandler-1966", "britannica-napoleon"],
  },
  {
    id: "austerlitz",
    name: "Austerlitz",
    years: "2 December 1805",
    location: "Moravia, near Brno (today the Czech Republic)",
    opponents: "Austria and Russia (the Third Coalition)",
    result: "French victory",
    significance:
      "His most admired battle: a feigned weakness on the right drew the Allies off the Pratzen Heights, which he then seized to split their army.",
    x: 62,
    y: 52,
    sourceIds: ["chandler-1966", "roberts-2014"],
  },
  {
    id: "jena",
    name: "Jena–Auerstedt",
    years: "14 October 1806",
    location: "Saxony, central Germany",
    opponents: "The Kingdom of Prussia",
    result: "French victory",
    significance:
      "Two simultaneous battles knocked Prussia out of the war in a single day and opened Berlin to French occupation.",
    x: 56,
    y: 42,
    sourceIds: ["chandler-1966"],
  },
  {
    id: "peninsula",
    name: "Peninsular War",
    years: "1808–1814",
    location: "Spain and Portugal",
    opponents: "Spain, Portugal and Britain under Wellington",
    result: "French defeat",
    significance:
      "Six years of guerrilla resistance and British intervention tied down hundreds of thousands of French troops — the 'Spanish ulcer'.",
    x: 22,
    y: 70,
    sourceIds: ["chandler-1966", "broers-2014"],
  },
  {
    id: "wagram",
    name: "Wagram",
    years: "5–6 July 1809",
    location: "The Marchfeld plain, north-east of Vienna",
    opponents: "The Austrian Empire",
    result: "French victory",
    significance:
      "More than 300,000 men fought; a grand battery of over a hundred guns broke the Austrian centre and led to the Treaty of Schönbrunn.",
    x: 62,
    y: 57,
    sourceIds: ["chandler-1966"],
  },
  {
    id: "russia",
    name: "Russian Campaign",
    years: "June – December 1812",
    location: "From the Niemen River to Moscow",
    opponents: "The Russian Empire",
    result: "French defeat",
    significance:
      "The Grande Armée of some 600,000 was destroyed by battle, disease, hunger and winter; the Empire never recovered.",
    x: 86,
    y: 30,
    sourceIds: ["zamoyski-2004"],
  },
  {
    id: "leipzig",
    name: "Leipzig",
    years: "16–19 October 1813",
    location: "Saxony, eastern Germany",
    opponents: "Austria, Prussia, Russia and Sweden",
    result: "French defeat",
    significance:
      "The Battle of the Nations, the largest in Europe before the First World War, ended French power east of the Rhine.",
    x: 57,
    y: 40,
    sourceIds: ["chandler-1966"],
  },
  {
    id: "waterloo",
    name: "Waterloo",
    years: "18 June 1815",
    location: "South of Brussels, in present-day Belgium",
    opponents: "Wellington's Anglo-Allied army and Blücher's Prussians",
    result: "French defeat",
    significance:
      "The final battle of the Napoleonic Wars; the Prussian arrival in the afternoon decided the day and ended his reign.",
    x: 45,
    y: 36,
    sourceIds: ["hofschroer-1998"],
  },
];

export type Marshal = {
  name: string;
  epithet: string;
  years: string;
  role: string;
  battles: string[];
  relationship: string;
  achievement: string;
  fate: string;
  sourceIds: string[];
};

export const marshals: Marshal[] = [
  {
    name: "Michel Ney",
    epithet: "The Bravest of the Brave",
    years: "1769–1815",
    role: "Corps commander; commander of the rearguard in Russia",
    battles: ["Elchingen 1805", "Friedland 1807", "Borodino 1812", "Waterloo 1815"],
    relationship:
      "Admired for courage rather than judgement. He pledged to bring Napoleon back in an iron cage in 1815, then joined him days later.",
    achievement:
      "Held the rearguard together during the retreat from Russia, reputedly the last Frenchman to leave Russian soil.",
    fate: "Convicted of treason by the restored Bourbons and shot in Paris on 7 December 1815.",
    sourceIds: ["chandler-1966", "roberts-2014"],
  },
  {
    name: "Jean Lannes",
    epithet: "The Roland of the Grande Armée",
    years: "1769–1809",
    role: "Corps commander and assault specialist",
    battles: ["Montebello 1800", "Austerlitz 1805", "Friedland 1807", "Ratisbon 1809"],
    relationship:
      "One of the very few who used the familiar 'tu' with Napoleon and openly criticised him to his face.",
    achievement: "Mastered the frontal assault and the siege; a key hand in the victory at Friedland.",
    fate: "Mortally wounded at Aspern-Essling in May 1809 — the first marshal to die of battle wounds.",
    sourceIds: ["chandler-1966"],
  },
  {
    name: "Joachim Murat",
    epithet: "The Dashing Cavalryman",
    years: "1767–1815",
    role: "Commander of the Reserve Cavalry; King of Naples from 1808",
    battles: ["Marengo 1800", "Austerlitz 1805", "Eylau 1807", "Borodino 1812"],
    relationship:
      "Napoleon's brother-in-law, married to Caroline Bonaparte; brilliant in the field, unreliable in politics.",
    achievement: "Led the massed cavalry charge of roughly 10,000 horsemen that saved the French centre at Eylau.",
    fate: "Deserted Napoleon in 1814, tried to keep Naples in 1815, was captured and executed by firing squad in October 1815.",
    sourceIds: ["chandler-1966", "roberts-2014"],
  },
  {
    name: "Louis-Nicolas Davout",
    epithet: "The Iron Marshal",
    years: "1770–1823",
    role: "Corps commander; Minister of War in 1815",
    battles: ["Austerlitz 1805", "Auerstedt 1806", "Eckmühl 1809", "Wagram 1809"],
    relationship:
      "Cold, unpopular with other marshals, and the most professionally reliable officer Napoleon had.",
    achievement: "Defeated the main Prussian army at Auerstedt while heavily outnumbered.",
    fate: "Survived the Empire, was briefly disgraced, and was restored to the peerage before his death in 1823.",
    sourceIds: ["chandler-1966"],
  },
  {
    name: "André Masséna",
    epithet: "The Dear Child of Victory",
    years: "1758–1817",
    role: "Independent army commander in Switzerland, Italy and Portugal",
    battles: ["Zurich 1799", "Genoa 1800", "Aspern-Essling 1809", "Bussaco 1810"],
    relationship:
      "One of the oldest and most independent marshals; the relationship soured after his failure in Portugal.",
    achievement: "His victory at the Second Battle of Zurich in 1799 saved France from invasion.",
    fate: "Removed from command after the Portuguese campaign of 1810–11 and died in retirement in 1817.",
    sourceIds: ["chandler-1966"],
  },
  {
    name: "Jean-de-Dieu Soult",
    epithet: "The Duke of Dalmatia",
    years: "1769–1851",
    role: "Corps commander at Austerlitz; commander in Spain; chief of staff in 1815",
    battles: ["Austerlitz 1805", "Corunna 1809", "Toulouse 1814", "Waterloo campaign 1815"],
    relationship: "Trusted with independent command, though Napoleon doubted his loyalty and his ambition.",
    achievement: "Took the Pratzen Heights at Austerlitz, the decisive movement of the battle.",
    fate: "Outlived the Empire by decades and served three times as Prime Minister of France.",
    sourceIds: ["chandler-1966", "roberts-2014"],
  },
  {
    name: "Louis-Alexandre Berthier",
    epithet: "The Emperor's Chief of Staff",
    years: "1753–1815",
    role: "Chief of the General Staff for almost the whole Empire",
    battles: ["Marengo 1800", "Austerlitz 1805", "Wagram 1809", "Russia 1812"],
    relationship:
      "Not a battlefield commander but the man who turned Napoleon's intentions into precise orders for hundreds of thousands of men.",
    achievement: "Built the staff system that made corps warfare possible; his absence in 1815 was keenly felt.",
    fate: "Died in a fall from a window at Bamberg on 1 June 1815 in unresolved circumstances.",
    sourceIds: ["chandler-1966"],
  },
];

export type Quote = {
  text: string;
  status: "Verified" | "Attributed";
  context: string;
  sourceIds: string[];
};

export const quotes: Quote[] = [
  {
    text: "Soldiers, from the summit of these pyramids, forty centuries look down upon you.",
    status: "Verified",
    context:
      "Addressed to the army before the Battle of the Pyramids, 21 July 1798, and recorded in the campaign correspondence.",
    sourceIds: ["correspondance", "roberts-2014"],
  },
  {
    text: "My true glory is not that I have won forty battles… what will live for ever is my Civil Code.",
    status: "Verified",
    context: "Dictated on Saint Helena and recorded by Las Cases in the Mémorial de Sainte-Hélène.",
    sourceIds: ["las-cases-1823"],
  },
  {
    text: "Impossible is a word to be found only in the dictionary of fools.",
    status: "Attributed",
    context:
      "Widely repeated but not traceable to a verified letter or dictation; the underlying idea appears in his correspondence in different words.",
    sourceIds: ["correspondance"],
  },
  {
    text: "A leader is a dealer in hope.",
    status: "Attributed",
    context: "Popular in leadership writing; no primary source records him saying it in this form.",
    sourceIds: ["correspondance"],
  },
  {
    text: "History is the version of past events that people have decided to agree upon.",
    status: "Attributed",
    context: "Frequently quoted, but the wording is a later paraphrase rather than a documented statement.",
    sourceIds: ["correspondance"],
  },
];

export type AnalysisPoint = { title: string; text: string; sourceIds: string[] };

export const achievements: AnalysisPoint[] = [
  {
    title: "Equality before the law",
    text: "The Civil Code of 1804 abolished feudal privilege, secured property rights, and made civil status secular. Its influence survives in the legal systems of much of Europe, Latin America and beyond.",
    sourceIds: ["britannica-code", "woolf-1991"],
  },
  {
    title: "Education and public service",
    text: "The lycées and the reformed grandes écoles trained administrators and engineers on ability rather than birth, creating a professional civil service.",
    sourceIds: ["woolf-1991", "roberts-2014"],
  },
  {
    title: "Stable administration and finance",
    text: "Prefects, a functioning tax system and the Banque de France ended a decade of fiscal chaos and gave France an administrative structure that still exists.",
    sourceIds: ["roberts-2014", "woolf-1991"],
  },
  {
    title: "Military transformation",
    text: "The self-sufficient corps, massed artillery and rapid marching transformed how wars were fought, and are still studied in staff colleges.",
    sourceIds: ["chandler-1966"],
  },
];

export const criticisms: AnalysisPoint[] = [
  {
    title: "Authoritarian rule",
    text: "He censored the press down to a handful of approved papers, ran a political police under Fouché, used plebiscites to ratify decisions already taken, and detained opponents without trial.",
    sourceIds: ["dwyer-2013", "englund-2004"],
  },
  {
    title: "The human cost of permanent war",
    text: "Historians estimate that the Napoleonic Wars killed somewhere between three and six million people, soldiers and civilians together, across Europe.",
    sourceIds: ["broers-2014", "zamoyski-2004"],
  },
  {
    title: "The restoration of colonial slavery",
    text: "In 1802 he reversed the Revolution's 1794 abolition and restored slavery in the French colonies, sending an expedition to Saint-Domingue that failed against Haitian resistance.",
    sourceIds: ["dwyer-2013"],
  },
  {
    title: "Dynastic expansionism",
    text: "He placed relatives on the thrones of Spain, Naples, Holland and Westphalia, imposing French rule on populations that had not asked for it and provoking national resistance.",
    sourceIds: ["broers-2014", "woolf-1991"],
  },
];

export const assessment =
  "Historians rarely settle on 'hero' or 'tyrant', because Napoleon was convincingly both. He consolidated the Revolution's civil gains — legal equality, careers open to talent, a secular state — and exported them across Europe, while destroying its political freedoms at home and restoring slavery in its colonies. The same drive that produced the Civil Code produced Spain and Russia. The most defensible judgement is that he was a transformative modernising ruler whose achievements are inseparable from the coercion and the enormous loss of life that made them possible, and that a serious assessment has to hold both halves at once.";
