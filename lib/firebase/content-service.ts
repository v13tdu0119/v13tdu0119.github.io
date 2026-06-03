import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  type Unsubscribe,
} from "firebase/firestore";
import type { SiteContent } from "@/types/site-content";
import { SITE_CONTENT_DOC } from "@/types/site-content";
import { mergeSiteContent } from "@/lib/site-content-utils";
import { getFirebaseDb } from "@/lib/firebase/client";

function contentDocRef() {
  const db = getFirebaseDb();
  if (!db) return null;
  const [collectionId, documentId] = SITE_CONTENT_DOC.split("/");
  return doc(db, collectionId, documentId);
}

export async function fetchSiteContent(
  defaults: SiteContent,
): Promise<SiteContent> {
  const ref = contentDocRef();
  if (!ref) return defaults;

  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return defaults;

  return mergeSiteContent(defaults, snapshot.data() as Partial<SiteContent>);
}

export function subscribeSiteContent(
  defaults: SiteContent,
  onChange: (content: SiteContent) => void,
  onError?: (error: Error) => void,
): Unsubscribe | null {
  const ref = contentDocRef();
  if (!ref) return null;

  return onSnapshot(
    ref,
    (snapshot) => {
      if (!snapshot.exists()) {
        onChange(defaults);
        return;
      }
      onChange(
        mergeSiteContent(defaults, snapshot.data() as Partial<SiteContent>),
      );
    },
    (error) => onError?.(error),
  );
}

export async function saveSiteContent(
  content: SiteContent,
  uid: string,
): Promise<void> {
  const ref = contentDocRef();
  if (!ref) {
    throw new Error("Firebase is not configured.");
  }

  await setDoc(
    ref,
    {
      ...content,
      updatedAt: serverTimestamp(),
      updatedBy: uid,
    },
    { merge: false },
  );
}
