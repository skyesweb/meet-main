import { Box } from "@chakra-ui/react";
import { UseToastOptions } from "@chakra-ui/react";

export enum ToastIds {
  COPY_LINK_TOAST_ID,
  SHARING_SCREEN_TOAST_ID,
  BROADCASTING_SCREEN_TOAST_ID,
  VIEWING_SHARED_SCREEN_TOAST_ID,
}

export const copyLinkToastConfig: UseToastOptions = {
  id: ToastIds.COPY_LINK_TOAST_ID,
  isClosable: true,
  position: "top",
  status: "error",
  title: "Share link copied to your clipboard.",
  render: () => {
    return (
      <Box
        background="#FCEAF0"
        border="1px solid #DF2868"
        borderRadius="3px"
        color="#666666"
        fontSize="14px"
        padding="15px 20px"
        textAlign="center"
      >
        Share link copied to your clipboard.
      </Box>
    );
  },
};

export const sharingScreenToastConfig: UseToastOptions = {
  id: ToastIds.VIEWING_SHARED_SCREEN_TOAST_ID,
  isClosable: false,
  position: "top",
  status: "success",
  duration: null,
};

export const viewingSharedScreenToastId: UseToastOptions = {
  id: ToastIds.SHARING_SCREEN_TOAST_ID,
  isClosable: false,
  position: "top",
  status: "success",
  duration: null,
};

export const broadcastingToastId: UseToastOptions = {
  id: ToastIds.BROADCASTING_SCREEN_TOAST_ID,
  isClosable: false,
  position: "top-left",
  status: "success",
  duration: null,
};
