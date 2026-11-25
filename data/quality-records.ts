/**
 * Verified quality & regulatory records for Siflon Group.
 *
 * Every entry is drawn from a certificate or licence on file in
 * `internal-assets/documents/`. Nothing in this file is inferred, and no
 * claim is published that cannot be traced to a specific document.
 *
 * Compliance notes:
 *  - Form-25 is a manufacturing licence under the Drugs and Cosmetics Act 1940.
 *    It is NOT a certification and must never be presented as one.
 *  - A Form-25 licence reference does NOT establish WHO-GMP status.
 *  - WHO-GMP status is recorded only where a WHO-GMP certificate is on file.
 *  - No ISO, GMP, FDA, CDSCO or other certification is asserted for a
 *    division unless a matching certificate for that division is on file.
 */

export interface QualityRecord {
  id: string;
  /** The business that holds the record. */
  division: string;
  /** Short, publication-ready record name. */
  title: string;
  /** Certificate / licence number exactly as it appears on the document. */
  recordNumber: string | null;
  /** Issuing body exactly as it appears on the document. */
  issuingAuthority: string;
  /** Validity period exactly as it appears on the document. */
  validity: string;
  /** Scope, as stated on the document. */
  scope: string;
  /** Source file, for traceability (not published to visitors). */
  sourceFile: string;
  /** Whether publication of this record is approved. */
  approved: boolean;
}

export interface DivisionQuality {
  slug: string;
  displayName: string;
  status: "verified" | "no-public-records" | "pending-verification";
  summary: string;
  records: QualityRecord[];
}

export const QUALITY_RECORDS: QualityRecord[] = [
  {
    id: "pharma-who-gmp-2029",
    division: "Siflon Pharma",
    title: "WHO-GMP Certificate",
    recordNumber: "WPC/02/24",
    issuingAuthority: "Director General, Drugs Controller General of India (CDSCO)",
    validity: "05.02.2024 to 14.05.2029",
    scope:
      "GMP status for the manufacture of Triclabendazole, Fenbendazole, Albendazole, Oxyclozanide, Closantel, Rafoxanide and Nitroxynil (Tablets/Boluses) and formulations in tablet dosage forms.",
    sourceFile: "internal-assets/documents/certificates/WHO GMP Certificate valid upto 14.05.2029.pdf",
    approved: true,
  },
  {
    id: "pharma-who-gmp-2025",
    division: "Siflon Pharma",
    title: "WHO-GMP Certificate",
    recordNumber: "WPC/06/25",
    issuingAuthority: "Director General, Drugs Controller General of India (CDSCO)",
    validity: "Dated 19.05.2025",
    scope:
      "GMP status for the manufacture of Triclabendazole, Fenbendazole, Albendazole, Oxyclozanide, Closantel, Rafoxanide and Nitroxynil (Tablets/Boluses) and formulations in tablet dosage forms.",
    sourceFile: "internal-assets/documents/certificates/WHO GMP Two Products dt 19.05.2025.pdf",
    approved: true,
  },
  {
    id: "pharma-who-gmp-2026",
    division: "Siflon Pharma",
    title: "WHO/GMP Certificate",
    recordNumber: "WPC/18/26",
    issuingAuthority: "Director General, Drugs Controller General of India (CDSCO)",
    validity: "Signed 06.08.2026",
    scope:
      "GMP status for the manufacture of Triclabendazole, Fenbendazole, Albendazole, Oxyclozanide, Closantel, Rafoxanide and Nitroxynil (Tablets/Boluses) and formulations in tablet dosage forms.",
    sourceFile: "internal-assets/documents/certificates/GMP Certificate-SIFLON PHARMA - 2026.pdf",
    approved: true,
  },
  {
    id: "pharma-iso-9001",
    division: "Siflon Pharma",
    title: "ISO 9001:2015 Certificate of Conformity",
    recordNumber: "QIM/02025/838",
    issuingAuthority: "Quality Management System, QMS PVT LTD, Indore (accredited by NABEB / NABL)",
    validity: "22.01.2025 to 21.01.2028",
    scope:
      "ISO 9001:2015 conformity for Siflon Pharma Private Limited, certified by a certification body accredited by the National Accreditation Board for Certification Bodies (NABEB) and recognised by the National Accreditation Board for Testing and Calibration Laboratories (NABL).",
    sourceFile: "internal-assets/documents/certificates/ISO Certificate 2026 - Siflon Pharma.pdf",
    approved: true,
  },
  {
    id: "pharma-haccp",
    division: "Siflon Pharma",
    title: "HACCP Certificate",
    recordNumber: "SPL-103606",
    issuingAuthority: "Certificate of Compliance, HACCP Certification",
    validity: "21.02.2025 to 20.02.2027",
    scope:
      "Hazard Analysis and Critical Control Points (HACCP) certification for Siflon Pharma Private Limited.",
    sourceFile: "internal-assets/documents/certificates/HACCP SIFLON PHARMA PVT LTD..pdf",
    approved: true,
  },
  {
    id: "pharma-form25",
    division: "Siflon Pharma",
    title: "Drug Manufacturing Licence (Form-25)",
    recordNumber: "Licence Nos. 1, 2 & 3",
    issuingAuthority: "Government of Andhra Pradesh, Drugs & Cosmetics Act 1940",
    validity: "Site: Sy. No. 25/4 Rachanapalli",
    scope:
      "Manufacturing licence under the Drugs and Cosmetics Act 1940, amended (Form-25 Amendment No. 6) to record the change of name from Siflon Drugs to Siflon Pharma Private Limited, effective 27.05.2022. Schedule F tablet manufacture is confirmed; further schedule detail requires review of the licence appendix.",
    sourceFile: "internal-assets/documents/licences/DRUG MANUFACTURING LICENSE.pdf",
    approved: true,
  },
  {
    id: "drugs-zed-silver",
    division: "Siflon Drugs",
    title: "ZED Silver Certificate (Zero-Defect Quality Initiative)",
    recordNumber: null,
    issuingAuthority: "Zero-Defect Quality Initiative certification",
    validity: "Dated 22.09.2023",
    scope:
      "Silver-level zero-defect certification for Siflon Drugs & Pharmaceuticals Private Limited.",
    sourceFile: "internal-assets/documents/certificates/ZED Silver_SIFLON DRUGS & PHARMACEUTICALS PVT LTD.pdf",
    approved: true,
  },
];

export const DIVISION_QUALITY: DivisionQuality[] = [
  {
    slug: "siflon-pharma",
    displayName: "Siflon Pharma",
    status: "verified",
    summary:
      "Siflon Pharma Private Limited holds a Form-25 manufacturing licence under the Drugs and Cosmetics Act 1940, a WHO-GMP certificate issued by the Drugs Controller General of India for export, ISO 9001:2015 conformity and HACCP certification. The records below are taken directly from the certificates on file.",
    records: QUALITY_RECORDS.filter((r) => r.division === "Siflon Pharma" && r.approved),
  },
  {
    slug: "siflon-drugs",
    displayName: "Siflon Drugs",
    status: "verified",
    summary:
      "Siflon Drugs and Pharmaceuticals Private Limited is a separately registered legal entity from Siflon Pharma. A Silver-level zero-defect (ZED) certification is on file for this business. Manufacturing licences and GMP certificates specific to Siflon Drugs will be published once they have been verified as belonging to this legal entity.",
    records: QUALITY_RECORDS.filter((r) => r.division === "Siflon Drugs" && r.approved),
  },
  {
    slug: "siflon-polymers",
    displayName: "Siflon Polymers",
    status: "no-public-records",
    summary:
      "No quality certificates, manufacturing licences or regulatory records for Siflon Polymers Private Limited have been received for publication. Quality and regulatory documentation for this division can be requested directly.",
    records: [],
  },
  {
    slug: "siflon-pipes",
    displayName: "Siflon Pipes",
    status: "pending-verification",
    summary:
      "Siflon Pipes remains in a pending verification state. No legal entity, facility, product range or quality record has been confirmed for this business, and none is presented here.",
    records: [],
  },
];

/** Records safe to publish: approved only. */
export function getApprovedRecords(): QualityRecord[] {
  return QUALITY_RECORDS.filter((r) => r.approved);
}

/**
 * The primary (current) WHO-GMP record, selected by its documented validity
 * window. Other WHO-GMP certificates are on file but are not asserted as
 * current here.
 */
export function getCurrentWhoGmp(): QualityRecord | undefined {
  return QUALITY_RECORDS.find((r) => r.id === "pharma-who-gmp-2029");
}

export function getRecordById(id: string): QualityRecord | undefined {
  return QUALITY_RECORDS.find((r) => r.id === id);
}
