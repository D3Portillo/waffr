export const setModalCallback = (f) => (window.openWffrModal = f);

export const getModalCallback = () => window.openWffrModal;

/**
 *
 * @param {{ title: string, message: string }} config
 */
export const openModal = (config) => {
  const openCallback = getModalCallback();
  openCallback(config);
};
