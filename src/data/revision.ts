import { subjects } from "./topics";

export interface RevisionTopic {
  name: string;
  emoji: string;
  subjectSlug: string;
  subjectName: string;
  subjectColor: string;
  pageNumber: number; // page in the PDF (1-indexed)
}

// Build revision topics list — page 1=cover, 2=TOC, 3+ = topics in subject order
export const revisionTopics: RevisionTopic[] = [];

let pageNum = 3; // first topic starts at page 3
for (const subject of subjects) {
  for (const topic of subject.topics) {
    revisionTopics.push({
      name: topic.name,
      emoji: topic.emoji,
      subjectSlug: subject.slug,
      subjectName: subject.shortName,
      subjectColor: subject.color,
      pageNumber: pageNum,
    });
    pageNum++;
  }
}

export const REVISION_PDF_PATH = "/pdfs/revision_one_pagers.pdf";
export const totalRevisionPages = revisionTopics.length + 2; // +cover +toc
