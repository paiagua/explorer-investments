'use client';
import { useEffect, useRef } from "react";

const GoogleLoginButton = ({ onSuccess, formstep }) => {
  const alreadyRendered = useRef(false); // <- controla renderização

  useEffect(() => {
    if (formstep !== 1) return;
    if (alreadyRendered.current) return; // já foi → não renderiza de novo

    const ensureGoogleScriptLoaded = () => {
      return new Promise((resolve) => {
        if (window.google && window.google.accounts) {
          resolve();
        } else {
          const script = document.createElement("script");
          script.src = "https://accounts.google.com/gsi/client";
          script.async = true;
          script.defer = true;
          script.onload = resolve;
          document.body.appendChild(script);
        }
      });
    };

    const renderGoogleButton = () => {
      const target = document.getElementById("google-signin-btn");
      if (!target) {
        requestAnimationFrame(renderGoogleButton);
        return;
      }

      // Garante que não vai duplicar
      if (target.hasChildNodes()) return;

      window.google.accounts.id.initialize({
        client_id: "817648258211-mosb2dq2v19o4m52l4acss96fcfarre8.apps.googleusercontent.com",
        callback: onSuccess,
        auto_select: false,
        ux_mode: "popup",
      });

      window.google.accounts.id.renderButton(target, {
        type: "standard",
        theme: "filled_blue",
        size: "large",
        text: "signup_with",
        logo_alignment: "center",
      });

      window.google.accounts.id.cancel();

      alreadyRendered.current = true; // 🔐 bloqueia novas execuções
    };

    ensureGoogleScriptLoaded().then(renderGoogleButton);
  }, [formstep, onSuccess]);

  return (
    <div>
      <div id="google-signin-btn" className="w-full flex justify-center mt-4"></div>
    </div>
  );
};

export default GoogleLoginButton;
