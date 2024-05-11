"use client"

import React from 'react';
import { LoginButton } from '@telegram-auth/react';

const TgAuth = () => {
    return (
        <div>
            <div className="App">
                <LoginButton
                    botUsername={"virus_search_bot"}
                    authCallbackUrl="/path/to/callback/url"
                    buttonSize="large" // "large" | "medium" | "small"
                    cornerRadius={5} // 0 - 20
                    showAvatar={true} // true | false
                    lang="en"
                />
            </div>
        </div>
    );
};

export default TgAuth;