import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  HStack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const FileDropper = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [headerLines, setHeaderLines] = useState(0);

  const onDrop1 = useCallback((acceptedFiles) => {
    setFile1(acceptedFiles[0]);
  }, []);

  const onDrop2 = useCallback((acceptedFiles) => {
    setFile2(acceptedFiles[0]);
  }, []);

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } =
    useDropzone({ onDrop: onDrop1 });
  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } =
    useDropzone({ onDrop: onDrop2 });

  const handleMergeAndDownload = async () => {
    if (!file1 || !file2) {
      alert("Please drop both files.");
      return;
    }

    const readExcel = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonSheet = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          resolve(jsonSheet);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
      });
    };

    try {
      const df1 = await readExcel(file1);
      const df2 = await readExcel(file2);

      const df1Data = df1.slice(headerLines);
      const df2Header = df2.slice(0, headerLines);
      const df2Data = df2.slice(headerLines);

      const commonValues = new Set();

      for (let row of df1Data) {
        if (row.length > 0) {
          commonValues.add(row[0]);
        }
      }

      const df2Filtered = df2Data.filter((row) => !commonValues.has(row[0]));

      const mergedData = [...df2Filtered];

      const newWorkbook = XLSX.utils.book_new();
      const newWorksheet = XLSX.utils.aoa_to_sheet(mergedData);
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Filtered Data");

      const wbout = XLSX.write(newWorkbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAs(
        new Blob([wbout], { type: "application/octet-stream" }),
        "filtered.xlsx"
      );
    } catch (error) {
      console.error("Error processing files:", error);
    }
  };

  return (
    <VStack spacing={6} mt={"10em"}>
      <HStack spacing={6} w="100%" maxW="600px">
        <Box
          {...getRootProps1()}
          border="2px dashed"
          borderColor="gray.300"
          p={6}
          rounded="md"
          cursor="pointer"
          textAlign="center"
          flex={1}
        >
          <input {...getInputProps1()} />
          <Text>Drop File 1 here, or click to select</Text>
          {file1 && (
            <Text mt={2} fontSize="sm" color="gray.500">
              {file1.name}
            </Text>
          )}
        </Box>
        <Box
          {...getRootProps2()}
          border="2px dashed"
          borderColor="gray.300"
          p={6}
          rounded="md"
          cursor="pointer"
          textAlign="center"
          flex={1}
        >
          <input {...getInputProps2()} />
          <Text>Drop File 2 here, or click to select</Text>
          {file2 && (
            <Text mt={2} fontSize="sm" color="gray.500">
              {file2.name}
            </Text>
          )}
        </Box>
      </HStack>
      <HStack spacing={6} w="100%" maxW="600px" justifyContent="center">
        <Text>Number of header lines to skip:</Text>
        <NumberInput
          value={headerLines}
          onChange={(valueString) => setHeaderLines(parseInt(valueString) || 0)}
          min={0}
        >
          <NumberInputField />
        </NumberInput>
      </HStack>
      <Button colorScheme="teal" onClick={handleMergeAndDownload}>
        Remove Duplicate and Download
      </Button>
    </VStack>
  );
};

export default FileDropper;
