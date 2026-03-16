// ==UserScript==
// @name           Auto Twitch Drop Claimer
// @name:tr        Otomatik Twitch Drop Alıcı
// @namespace      https://github.com/Arcdashckr/Auto-Twitch-Drop-Claimer
// @version        1.0.3
// @description    Auto clicking "Click to claim" in inventory page
// @description:tr Drop Envanteri sayfasında "Şimdi Al" tuşuna otomatik tıklar
// @author         Arcdashckr
// @match          https://www.twitch.tv/*
// @run-at         document-end
// @icon           https://cdn.simpleicons.org/twitch/9146FF
// @grant          none
// @license        MIT
// @updateURL      https://github.com/Arcdashckr/Auto-Twitch-Drop-Claimer/raw/main/Auto-Twitch-Drop-Claimer.js
// @downloadURL    https://github.com/Arcdashckr/Auto-Twitch-Drop-Claimer/raw/main/Auto-Twitch-Drop-Claimer.js
// @supportURL     https://github.com/Arcdashckr/Auto-Twitch-Drop-Claimer/issues
// ==/UserScript==

// Credits: https://greasyfork.org/tr/scripts/420346-auto-claim-twitch-drop

const claimButtonXPath = '//div[contains(@class, "inventory-max-width")]//button[contains(@class, "ScCoreButton-sc")]';
const refreshMinute = 5;
let refreshTimer = null;
let lastLog = "";

function log(message, type = "INFO") {
    if (lastLog === message) return;
    lastLog = message;

    const styles = {
        INFO: "color: #9146FF; font-weight: bold;",
        SUCCESS: "color: #00FF7F; font-weight: bold;",
        WARN: "color: #FFD700; font-weight: bold;",
        SYSTEM: "background: #9146FF; color: white; padding: 2px 5px; border-radius: 3px;"
    };

    console.log(`%c[Auto-Twitch-Drop-Claimer][${type}]%c ${message}`, styles.SYSTEM, styles[type]);
}

function getElementByXPath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function isInventoryPage() {
    return window.location.href.includes("/drops/inventory");
}

function handleRefresh() {
    if (isInventoryPage()) {
        if (!refreshTimer) {
            log(`Inventory page detected. Refresing in a ${refreshMinute} minutes.`, "INFO");
            refreshTimer = setInterval(() => {
                log("Page reloading...", "WARN");
                window.location.reload();
            }, refreshMinute * 60 * 1000);
        }
    } else {
        if (refreshTimer) {
            log("Inventory page closed, timer stopped.", "WARN");
            clearInterval(refreshTimer);
            refreshTimer = null;
        }
    }
}

const onMutate = function() {
    if (isInventoryPage()) {
        const button = getElementByXPath(claimButtonXPath);
        if (button) {
            log("Drop founded! Clicking claim button...", "SUCCESS");
            button.click();
            lastLog = "";
        }
    }
    handleRefresh();
};

const observer = new MutationObserver(onMutate);
observer.observe(document.body, { childList: true, subtree: true });

log("Script initialized, watching inventory page...", "INFO");
handleRefresh();
