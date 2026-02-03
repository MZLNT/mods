"use strict";

const chalk = require("chalk");
const { version } = require("../package.json");
const gradient = require("gradient-string");
const readline = require("readline");

// --- CONFIG TAMPILAN ---
const logoAscii = `
███╗   ███╗ █████╗ ███████╗██╗     ███████╗███╗   ██╗████████╗
████╗ ████║██╔══██╗██╔════╝██║     ██╔════╝████╗  ██║╚══██╔══╝
██╔████╔██║███████║███████╗██║     █████╗  ██╔██╗ ██║   ██║   
██║╚██╔╝██║██╔══██║╚════██║██║     ██╔══╝  ██║╚██╗██║   ██║   
██║ ╚═╝ ██║██║  ██║███████║███████╗███████╗██║ ╚████║   ██║   
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
`;

const boxing = gradient("cyan", "blue")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// --- ANIMATION VARIABLES ---
const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const logMessages = [
  "Injecting Maslent Core...",
  "Bypassing Security Layer...",
  "Optimizing RAM Usage...",
  "Connecting to WhatsApp Server...",
  "Decrypting User Session...",
  "Loading Modules...",
  "Establishing Secure Connection..."
];

let i = 0;
let progress = 0;

// --- START ANIMATION ---
const spinnerInterval = setInterval(() => {
  // Clear Screen tiap frame biar smooth
  console.clear();
  
  // Render Logo
  console.log(gradient.pastel.multiline(logoAscii));
  console.log(chalk.center ? chalk.center(boxing) : boxing); // Fallback kalau chalk.center ga ada

  // Render Progress Bar
  const barLength = 30;
  const filledLength = Math.round((barLength * progress) / 100);
  const emptyLength = barLength - filledLength;
  const bar = "█".repeat(filledLength) + "░".repeat(emptyLength);
  
  // Warna Bar dinamis
  const barColor = progress < 50 ? chalk.red : (progress < 80 ? chalk.yellow : chalk.green);

  console.log(`\n  ${chalk.bold.white("SYSTEM BOOT")} : [${barColor(bar)}] ${progress}%`);
  
  // Render Spinner & Log Random
  const frame = chalk.cyanBright(frames[i = ++i % frames.length]);
  const logMsg = logMessages[Math.floor(progress / 15)] || "Finalizing...";
  console.log(`  ${frame}  ${chalk.dim(logMsg)}`);
  
  console.log("\n" + boxing);

  // Increment Progress
  progress += 2; // Kecepatan loading

  // --- FINISH CONDITION ---
  if (progress > 100) {
    clearInterval(spinnerInterval);
    showDashboard();
  }
}, 80); // Speed animasi (makin kecil makin ngebut)


// --- FINAL DASHBOARD ---
function showDashboard() {
  console.clear();
  console.log(gradient.passion.multiline(logoAscii));
  console.log(boxing);
  
  console.log(chalk.bold.greenBright("\n  ✅  SYSTEM ONLINE & READY"));
  console.log(chalk.bold.white("  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
  
  // Info Panel
  console.log(`  │  ${chalk.cyan("Creator")}     : ${chalk.white("Maslent")}`);
  console.log(`  │  ${chalk.cyan("Status")}      : ${chalk.green("Connected")}`);
  console.log(`  │  ${chalk.cyan("Mode")}        : ${chalk.magenta("Development")}`);
  
  console.log(chalk.bold.white("  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
  console.log(chalk.yellow("  ⚠  Waiting for user input..."));
  console.log("\n" + boxing + "\n");
}


// ============================================================
// JANGAN UBAH BAGIAN BAWAH INI (PENTING BUAT LIBRARY)
// ============================================================

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
