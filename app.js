const facilities = [
  { id: 1, name: "湘南保育園", type: "licensed", typeLabel: "認可保育所・公立", address: "逗子市池子2-11-9", lat: 35.3061634, lng: 139.5931693, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 2, name: "小坪保育園", type: "licensed", typeLabel: "認可保育所・公立", address: "逗子市小坪5-22-5", lat: 35.2978724, lng: 139.5544994, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 3, name: "双葉保育園", type: "licensed", typeLabel: "認可保育所・私立", address: "逗子市久木2-7-2", lat: 35.3032774, lng: 139.5781287, tsunami: "10〜20m", landslide: "急傾斜地の崩壊" },
  { id: 4, name: "沼間愛児園", type: "licensed", typeLabel: "認可保育所・私立", address: "逗子市沼間1-21-10", lat: 35.2968617, lng: 139.6041654, tsunami: null, landslide: "急傾斜地・土石流" },
  { id: 5, name: "桜山保育園", type: "licensed", typeLabel: "認可保育所・私立", address: "逗子市桜山5-15-2", lat: 35.2929091, lng: 139.5985824, tsunami: null, landslide: "土石流" },
  { id: 6, name: "湘南アイルド逗子保育園", type: "licensed", typeLabel: "認可保育所・私立", address: "逗子市逗子1-1-3 5F", lat: 35.2977002, lng: 139.580484, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 7, name: "逗子なないろ保育園", type: "licensed", typeLabel: "認可保育所・私立", address: "逗子市桜山6-18-22", lat: 35.2943394, lng: 139.5915387, tsunami: "0.5〜3m", landslide: null },
  { id: 8, name: "逗子幼稚園", type: "licensed", typeLabel: "幼稚園型認定こども園", address: "逗子市逗子3-1-17", lat: 35.2963392, lng: 139.5827921, tsunami: null, landslide: "急傾斜地・土石流" },
  { id: 9, name: "ごかんのいえ", type: "licensed", typeLabel: "小規模保育事業所", address: "逗子市新宿4-7-30", lat: 35.296292, lng: 139.5713678, tsunami: "3〜5m", landslide: null },
  { id: 10, name: "しらかば逗子乳児保育園", type: "licensed", typeLabel: "小規模保育事業所", address: "逗子市池子2-3-42", lat: 35.3020388, lng: 139.5933915, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 11, name: "第2あにえるち保育園", type: "licensed", typeLabel: "小規模保育事業所", address: "逗子市小坪2-10-20", lat: 35.3026155, lng: 139.5611003, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 12, name: "かぐのみ保育園", type: "licensed", typeLabel: "小規模保育事業所", address: "逗子市沼間2-21-26-7", lat: 35.2983192, lng: 139.6075833, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 13, name: "あにえるち保育室", type: "licensed", typeLabel: "家庭的保育事業所", address: "逗子市小坪1-13-8", lat: 35.3030191, lng: 139.5646851, tsunami: null, landslide: null },
  { id: 14, name: "ごかんのもり", type: "unlicensed", typeLabel: "認可外保育施設", address: "逗子市新宿4-7-29", lat: 35.2978413, lng: 139.5668909, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 15, name: "うみのこ", type: "unlicensed", typeLabel: "認可外保育施設", address: "逗子市桜山8-4-7", lat: 35.2909706, lng: 139.5773592, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 16, name: "みんなのあにえるち幼児園", type: "unlicensed", typeLabel: "認可外保育施設", address: "逗子市小坪1-8-41", lat: 35.3020919, lng: 139.5639514, tsunami: "5〜10m", landslide: "急傾斜地の崩壊" },
  { id: 17, name: "ままえん", type: "unlicensed", typeLabel: "認可外保育施設", address: "逗子市桜山8-5-13", lat: 35.290459, lng: 139.5762814, tsunami: null, landslide: "急傾斜地の崩壊" },
  { id: 18, name: "LaLaLand逗子", type: "unlicensed", typeLabel: "企業主導型保育事業", address: "逗子市逗子1-2-22 2F", lat: 35.2970086, lng: 139.5770592, tsunami: "5〜10m", landslide: null },
  { id: 19, name: "山本メディカルひでまり園", type: "unlicensed", typeLabel: "企業主導型保育事業", address: "逗子市逗子5-4-29 2F", lat: 35.2960059, lng: 139.58082, tsunami: "3〜5m", landslide: null },
  { id: 20, name: "葉山保育園", type: "licensed", typeLabel: "認可保育所・公立", city: "hayama", cityLabel: "葉山町", address: "葉山町堀内2050-9", lat: 35.271931, lng: 139.584259, reviewed: false },
  { id: 21, name: "葉山にこにこ保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "hayama", cityLabel: "葉山町", address: "葉山町長柄991-1", lat: 35.283222, lng: 139.590973, reviewed: false },
  { id: 22, name: "葉山ぎんのすず保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "hayama", cityLabel: "葉山町", address: "葉山町堀内1130-1", lat: 35.271469, lng: 139.572357, reviewed: false },
  { id: 23, name: "おひさま保育室", type: "licensed", typeLabel: "小規模保育事業所", city: "hayama", cityLabel: "葉山町", address: "葉山町一色1531-11", lat: 35.268082, lng: 139.586136, reviewed: false },
  { id: 24, name: "風の子保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "hayama", cityLabel: "葉山町", address: "葉山町上山口1658-2", lat: 35.268719, lng: 139.611771, reviewed: false },
  { id: 25, name: "明照幼稚園", type: "licensed", typeLabel: "認定こども園", city: "hayama", cityLabel: "葉山町", address: "葉山町堀内570-4", lat: 35.280975, lng: 139.572906, reviewed: false },
  { id: 26, name: "芽ぐみ保育室", type: "licensed", typeLabel: "家庭的保育事業所", city: "hayama", cityLabel: "葉山町", address: "葉山町堀内670", lat: 35.277195, lng: 139.580276, reviewed: false },
  { id: 27, name: "みんくいナーサリー", type: "licensed", typeLabel: "小規模保育事業所", city: "hayama", cityLabel: "葉山町", address: "葉山町堀内718-2", lat: 35.276653, lng: 139.578644, reviewed: false },
  { id: 28, name: "かもめと風保育園", type: "licensed", typeLabel: "小規模保育事業所", city: "hayama", cityLabel: "葉山町", address: "葉山町長柄62-4", lat: 35.283695, lng: 139.591141, reviewed: false },
  { id: 29, name: "由比ガ浜保育園", type: "licensed", typeLabel: "認可保育所・公立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市由比ガ浜3-11-48", lat: 35.313763, lng: 139.541428, reviewed: false },
  { id: 30, name: "鎌倉浄明寺雲母保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市浄明寺5-5-7", lat: 35.318298, lng: 139.5746, reviewed: false },
  { id: 31, name: "うちゅう保育園かまくら", type: "licensed", typeLabel: "認可保育所・私立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市扇ガ谷1-1-31", lat: 35.320854, lng: 139.549545, reviewed: false },
  { id: 32, name: "保育所のぞみ", type: "licensed", typeLabel: "認可保育所・私立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市小町2-11-4", lat: 35.320301, lng: 139.552368, reviewed: false },
  { id: 33, name: "富士愛育園", type: "licensed", typeLabel: "認可保育所・私立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市材木座6-8-20", lat: 35.304913, lng: 139.553802, reviewed: false },
  { id: 34, name: "鎌倉おなり保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市御成町2-5", lat: 35.31707, lng: 139.550049, reviewed: false },
  { id: 35, name: "佐助保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市佐助1-13-6", lat: 35.320488, lng: 139.542953, reviewed: false },
  { id: 36, name: "ハリス記念鎌倉幼稚園", type: "licensed", typeLabel: "認定こども園", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市由比ガ浜2-2-33", lat: 35.3158, lng: 139.549042, reviewed: false },
  { id: 37, name: "育ちあいの家おなり 第一保育室", type: "licensed", typeLabel: "家庭的保育事業所", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市御成町6-15", lat: 35.316536, lng: 139.547684, reviewed: false },
  { id: 38, name: "育ちあいの家おなり 第二保育室", type: "licensed", typeLabel: "家庭的保育事業所", city: "kamakura", cityLabel: "鎌倉地域", address: "鎌倉市御成町6-12", lat: 35.31641, lng: 139.547974, reviewed: false },
  { id: 39, name: "追浜保育園", type: "licensed", typeLabel: "認可保育所・公立", city: "yokosuka", cityLabel: "追浜・田浦", address: "横須賀市追浜本町2-1", lat: 35.318298, lng: 139.62973, reviewed: false },
  { id: 40, name: "パンダ保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "yokosuka", cityLabel: "追浜・田浦", address: "横須賀市追浜町3-1", lat: 35.315372, lng: 139.625137, reviewed: false },
  { id: 41, name: "のばら保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "yokosuka", cityLabel: "追浜・田浦", address: "横須賀市追浜町2-16-7", lat: 35.313503, lng: 139.626984, reviewed: false },
  { id: 42, name: "ぎんのすず保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "yokosuka", cityLabel: "追浜・田浦", address: "横須賀市追浜町2-71", lat: 35.310829, lng: 139.62529, reviewed: false },
  { id: 43, name: "船越保育園", type: "licensed", typeLabel: "認可保育所・公立", city: "yokosuka", cityLabel: "追浜・田浦", address: "横須賀市船越町6-47-42", lat: 35.301662, lng: 139.628845, reviewed: false },
  { id: 44, name: "ベネッセ田浦保育園", type: "licensed", typeLabel: "認可保育所・私立", city: "yokosuka", cityLabel: "追浜・田浦", address: "横須賀市長浦町1-20-3", lat: 35.291527, lng: 139.646423, reviewed: false }
];

const state = {
  type: "all",
  city: "all",
  risk: "all",
  search: "",
  favoritesOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("zushi-favorites") || "[]")),
  selectedId: null,
  origin: { lat: 35.297006, lng: 139.578768, label: "逗子駅" },
  settingOrigin: false,
  sort: "distance"
};

const map = L.map("map", { zoomControl: false, minZoom: 12, maxZoom: 18 }).setView([35.295, 139.581], 14);
L.control.zoom({ position: "bottomright" }).addTo(map);
L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
  attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>', maxZoom: 18
}).addTo(map);

const tsunamiLayer = L.tileLayer("https://disaportal.gsi.go.jp/data/raster/04_tsunami_newlegend_data/{z}/{x}/{y}.png", { opacity: 0.68, maxZoom: 18, attribution: "ハザード情報: 国土地理院" }).addTo(map);
const landslideLayers = [
  "05_jisuberikeikaikuiki",
  "05_dosekiryukeikaikuiki",
  "05_kyukeishakeikaikuiki"
].map(id => L.tileLayer(`https://disaportal.gsi.go.jp/data/raster/${id}/{z}/{x}/{y}.png`, { opacity: 0.68, maxZoom: 18, attribution: "ハザード情報: 国土地理院" }).addTo(map));

const markers = new Map();
const schoolLayer = L.layerGroup().addTo(map);
let originMarker = null;

function riskClass(facility) {
  if (facility.reviewed === false) return "unreviewed";
  if (facility.tsunami && facility.landslide) return "both";
  if (facility.tsunami) return "tsunami";
  if (facility.landslide) return "landslide";
  return "none";
}

function riskLabel(facility) {
  const r = riskClass(facility);
  return { both: "津波＋土砂", tsunami: "津波", landslide: "土砂", unreviewed: "地点未判定", none: "表示なし" }[r];
}

function distanceKm(a, b) {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

function formatDistance(facility) {
  const km = distanceKm(state.origin, facility);
  return km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`;
}

function markerIcon(facility) {
  return L.divIcon({
    className: "",
    html: `<div class="school-marker ${riskClass(facility)}">${facility.id}</div>`,
    iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -13]
  });
}

function riskTags(facility) {
  if (facility.reviewed === false) return '<span class="risk-tag unreviewed">地点未判定・地図で確認</span>';
  const tags = [];
  if (facility.tsunami) tags.push(`<span class="risk-tag tsunami">津波 ${facility.tsunami}</span>`);
  if (facility.landslide) tags.push(`<span class="risk-tag landslide">${facility.landslide}</span>`);
  if (!tags.length) tags.push('<span class="risk-tag none">今回の検索では表示なし</span>');
  return tags.join("");
}

function popupContent(facility) {
  const gsiUrl = `https://disaportal.gsi.go.jp/hazardmap/maps/index.html?ll=${facility.lat},${facility.lng}&z=17&base=pale&ls=dosha_keikai_jisuberi%2C0.8%7Cdosha_keikai_dosekiryu%2C0.8%7Cdosha_keikai_kyukeisha%2C0.8%7Ctsunamishinsui_raster%2C0.8&disp=11110`;
  const note = facility.reviewed === false ? "この地点は周辺リスクを未判定です。背景のハザード面とピンの位置関係を確認してください。" : "判定は住所検索による周辺情報です。背景のハザード面と園のピンの位置関係も確認してください。";
  return `<div class="popup-top"><div><h3 class="popup-title">${facility.name}</h3><div class="popup-type">${facility.cityLabel || "逗子市"} ・ ${facility.typeLabel}</div></div><span class="popup-distance">起点から ${formatDistance(facility)}</span></div><p class="popup-address">${facility.address}</p><div class="risk-tags">${riskTags(facility)}</div><p class="popup-note">${note}</p><a class="popup-link" href="${gsiUrl}" target="_blank" rel="noreferrer">公式マップで詳しく確認 ↗</a>`;
}

function buildMarkers() {
  facilities.forEach(f => {
    const marker = L.marker([f.lat, f.lng], { icon: markerIcon(f), title: f.name });
    marker.bindPopup(() => popupContent(f), { maxWidth: 300 });
    marker.on("click", () => selectFacility(f.id, false));
    markers.set(f.id, marker);
  });
}

function filteredFacilities() {
  const query = state.search.trim().toLowerCase();
  const riskOrder = { both: 0, tsunami: 1, landslide: 2, unreviewed: 3, none: 4 };
  return facilities.filter(f => {
    if (state.type !== "all" && f.type !== state.type) return false;
    if (state.city !== "all" && (f.city || "zushi") !== state.city) return false;
    if (state.risk !== "all" && riskClass(f) !== state.risk) return false;
    if (state.favoritesOnly && !state.favorites.has(f.id)) return false;
    if (query && !`${f.name} ${f.address} ${f.cityLabel || "逗子市"} ${f.typeLabel}`.toLowerCase().includes(query)) return false;
    return true;
  }).sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name, "ja");
    if (state.sort === "risk") return riskOrder[riskClass(a)] - riskOrder[riskClass(b)] || a.name.localeCompare(b.name, "ja");
    return distanceKm(state.origin, a) - distanceKm(state.origin, b);
  });
}

function render() {
  const visible = filteredFacilities();
  document.getElementById("visibleCount").textContent = visible.length;
  document.getElementById("riskCount").textContent = visible.filter(f => f.reviewed !== false).length;
  document.getElementById("bothCount").textContent = visible.filter(f => f.reviewed === false).length;
  document.getElementById("resultLabel").textContent = `${visible.length}施設`;

  const list = document.getElementById("facilityList");
  list.innerHTML = visible.length ? visible.map(f => `
    <article class="facility-card ${state.selectedId === f.id ? "selected" : ""}" data-id="${f.id}">
      <span class="marker-mini ${riskClass(f)}">${f.id}</span>
      <div>
        <h3>${f.name}</h3>
        <div class="facility-meta">${f.cityLabel || "逗子市"} ・ ${f.typeLabel} ・ 起点から${formatDistance(f)}</div>
        <div class="risk-tags">${riskTags(f)}</div>
      </div>
      <button class="bookmark-button ${state.favorites.has(f.id) ? "saved" : ""}" data-bookmark="${f.id}" type="button" title="候補に保存" aria-label="${f.name}を候補に保存"><i data-lucide="bookmark"></i></button>
    </article>`).join("") : '<div class="empty-state">条件に合う施設がありません</div>';

  schoolLayer.clearLayers();
  visible.forEach(f => schoolLayer.addLayer(markers.get(f.id)));
  bindListEvents();
  lucide.createIcons();
}

function bindListEvents() {
  document.querySelectorAll(".facility-card").forEach(card => card.addEventListener("click", e => {
    if (e.target.closest("[data-bookmark]")) return;
    selectFacility(Number(card.dataset.id), true);
  }));
  document.querySelectorAll("[data-bookmark]").forEach(button => button.addEventListener("click", e => {
    e.stopPropagation();
    const id = Number(button.dataset.bookmark);
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    localStorage.setItem("zushi-favorites", JSON.stringify([...state.favorites]));
    render();
  }));
}

function selectFacility(id, moveMap) {
  state.selectedId = id;
  const facility = facilities.find(f => f.id === id);
  render();
  if (moveMap) map.setView([facility.lat, facility.lng], Math.max(map.getZoom(), 16), { animate: true });
  const marker = markers.get(id);
  if (schoolLayer.hasLayer(marker)) marker.openPopup();
}

function updateOrigin(lat, lng, label) {
  state.origin = { lat, lng, label };
  document.getElementById("originLabel").textContent = label;
  if (originMarker) map.removeLayer(originMarker);
  originMarker = L.marker([lat, lng], { icon: L.divIcon({ className: "", html: '<div class="origin-marker"></div>', iconSize: [22,22], iconAnchor: [11,11] }), zIndexOffset: 1000 }).addTo(map).bindTooltip(label, { direction: "top", offset: [0,-8] });
  render();
}

buildMarkers();
updateOrigin(state.origin.lat, state.origin.lng, state.origin.label);

document.getElementById("searchInput").addEventListener("input", e => { state.search = e.target.value; render(); });
document.getElementById("citySelect").addEventListener("change", e => { state.city = e.target.value; render(); });
document.getElementById("sortSelect").addEventListener("change", e => { state.sort = e.target.value; render(); });
document.querySelectorAll("[data-type]").forEach(button => button.addEventListener("click", () => {
  state.type = button.dataset.type;
  document.querySelectorAll("[data-type]").forEach(b => b.classList.toggle("active", b === button));
  render();
}));
document.querySelectorAll("[data-risk]").forEach(button => button.addEventListener("click", () => {
  state.risk = button.dataset.risk;
  document.querySelectorAll("[data-risk]").forEach(b => b.classList.toggle("active", b === button));
  render();
}));
document.getElementById("favoritesOnly").addEventListener("click", e => {
  state.favoritesOnly = !state.favoritesOnly;
  e.currentTarget.classList.toggle("is-active", state.favoritesOnly);
  render();
});
document.getElementById("setOriginButton").addEventListener("click", () => {
  state.settingOrigin = !state.settingOrigin;
  document.getElementById("originHint").hidden = !state.settingOrigin;
  document.getElementById("map").style.cursor = state.settingOrigin ? "crosshair" : "";
});
map.on("click", e => {
  if (!state.settingOrigin) return;
  state.settingOrigin = false;
  document.getElementById("originHint").hidden = true;
  document.getElementById("map").style.cursor = "";
  updateOrigin(e.latlng.lat, e.latlng.lng, "引っ越し候補地点");
});
document.getElementById("tsunamiToggle").addEventListener("change", e => e.target.checked ? tsunamiLayer.addTo(map) : map.removeLayer(tsunamiLayer));
document.getElementById("landslideToggle").addEventListener("change", e => landslideLayers.forEach(l => e.target.checked ? l.addTo(map) : map.removeLayer(l)));
document.getElementById("resetViewButton").addEventListener("click", () => map.fitBounds([[35.264,139.535],[35.325,139.652]], { padding: [25,25] }));
document.getElementById("aboutButton").addEventListener("click", () => document.getElementById("aboutDialog").showModal());

lucide.createIcons();
map.fitBounds([[35.264,139.535],[35.325,139.652]], { padding: [25,25] });
