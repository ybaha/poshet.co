import React from "react";
import { AppLegalPage } from "@/lib/types/app";

interface LegalPageTemplateProps {
  legalData: AppLegalPage;
  appName: string;
  developer?: string;
}

const LegalPageTemplate = ({
  legalData,
  appName,
  developer = "Poshet",
}: LegalPageTemplateProps) => {
  const { title, sections, lastUpdated, contactEmail } = legalData;

  return (
    <article className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      {sections.map((section, index) => (
        <section key={index}>
          {section.title && (
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
          )}

          {section.type === "paragraph" && (
            <p className="mb-4">
              {section.content
                .replace(/{{APP_NAME}}/g, appName)
                .replace(/{{CONTACT_EMAIL}}/g, contactEmail)
                .replace(/{{DEVELOPER}}/g, developer)}
            </p>
          )}

          {section.type === "list" && (
            <>
              <p className="mb-2">
                {section.content
                  .replace(/{{APP_NAME}}/g, appName)
                  .replace(/{{CONTACT_EMAIL}}/g, contactEmail)
                  .replace(/{{DEVELOPER}}/g, developer)}
              </p>
              {section.items && (
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item
                        .replace(/{{APP_NAME}}/g, appName)
                        .replace(/{{CONTACT_EMAIL}}/g, contactEmail)
                        .replace(/{{DEVELOPER}}/g, developer)}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </section>
      ))}

      <section>
        <p className="mt-4">
          This {title.toLowerCase()} is effective as of {lastUpdated}
        </p>
      </section>

      <hr className="my-8" />

      <footer className="text-sm text-gray-600">
        <p>
          If you have any questions about this {title.toLowerCase()}, please
          contact us at{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-blue-600 hover:underline"
          >
            {contactEmail}
          </a>
        </p>
      </footer>
    </article>
  );
};

export default LegalPageTemplate;
