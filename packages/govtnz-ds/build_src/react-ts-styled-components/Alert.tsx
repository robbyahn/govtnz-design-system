import React from "react";
import styled from "styled-components";

type Props = {
  mode?: "live";
  level: "info" | "warning" | "success" | "error";
  children?: React.ReactNode;
  headingId?: string;
};

const StyledDiv = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv2 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg2 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv3 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg3 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv4 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg4 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv5 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg5 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv6 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg6 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv7 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg7 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const StyledDiv8 = styled.div`
  position: relative;
  background: g-theme-alert-background-color;
  color: g-theme-color;
  margin-bottom: 1em;
  padding: 24px 32px 24px 96px;
  border-radius: 4px;
  border: solid 1px g-theme-alert-border-color;
  ::before {
    content: "";
    display: block;
    width: 64px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::before {
    background-color: g-theme-alert-info-border-color;
  }
  ::before {
    background-color: g-theme-alert-warning-border-color;
  }
  ::before {
    background-color: g-theme-alert-success-border-color;
  }
  ::before {
    background-color: g-theme-error-border-color;
  }
`;

const StyledSvg8 = styled.svg`
  position: absolute;
  left: 16px;
  top: 24px;
  fill: g-theme-alert-icon-color;
`;

const Alert = ({ mode, level, children, headingId }: Props) => (
  <React.Fragment>
    {mode === "live" ? (
      <React.Fragment>
        {level === "info" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <StyledDiv level={level}>
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}

                    <StyledSvg
                      aria-hidden="true"
                      focusable="false"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                    >
                      <path d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z" />
                    </StyledSvg>
                  </StyledDiv>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "warning" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <StyledDiv2 level={level}>
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}

                    <StyledSvg2
                      aria-hidden="true"
                      focusable="false"
                      height="30"
                      viewBox="0 0 32 30"
                      width="32"
                    >
                      <path d="M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z" />
                    </StyledSvg2>
                  </StyledDiv2>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "success" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <StyledDiv3 level={level}>
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}

                    <StyledSvg3
                      aria-hidden="true"
                      focusable="false"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                    >
                      <path d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z" />
                    </StyledSvg3>
                  </StyledDiv3>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "error" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <StyledDiv4 level={level}>
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}

                    <StyledSvg4
                      aria-hidden="true"
                      focusable="false"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                    >
                      <path d="M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z" />
                    </StyledSvg4>
                  </StyledDiv4>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "info" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note">
              <StyledDiv5 level={level}>
                {children !== undefined ? (
                  children
                ) : (
                  <React.Fragment> Example alert content </React.Fragment>
                )}
                <StyledSvg5
                  aria-hidden="true"
                  focusable="false"
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                >
                  <path d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z" />
                </StyledSvg5>
              </StyledDiv5>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "warning" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note">
              <StyledDiv6 level={level}>
                {children !== undefined ? (
                  children
                ) : (
                  <React.Fragment> Example alert content </React.Fragment>
                )}
                <StyledSvg6
                  aria-hidden="true"
                  focusable="false"
                  height="30"
                  viewBox="0 0 32 30"
                  width="32"
                >
                  <path d="M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z" />
                </StyledSvg6>
              </StyledDiv6>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "success" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note" tabIndex={-1}>
              <StyledDiv7 level={level}>
                {children !== undefined ? (
                  children
                ) : (
                  <React.Fragment> Example alert content </React.Fragment>
                )}

                <StyledSvg7
                  aria-hidden="true"
                  focusable="false"
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                >
                  <path d="M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z" />
                </StyledSvg7>
              </StyledDiv7>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "error" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note" tabIndex={-1}>
              <StyledDiv8 level={level}>
                {children !== undefined ? (
                  children
                ) : (
                  <React.Fragment> Example alert content </React.Fragment>
                )}

                <StyledSvg8
                  aria-hidden="true"
                  focusable="false"
                  height="32"
                  viewBox="0 0 32 32"
                  width="32"
                >
                  <path d="M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z" />
                </StyledSvg8>
              </StyledDiv8>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}
  </React.Fragment>
);

export default Alert;
