---
title: Install R Studio
linktitle: R Studio
type: book
date: "2021-03-02T00:00:00+01:00"

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 2
---
## Download
R Studio can be downloaded freely from [R Studio website](https://rstudio.com/products/rstudio/download/) for Windows or Mac or other Opertating Systems.

{{% callout warning %}}
In the R Studio download process, the architecture of your processor (32 or 64 bit) must be considered.
{{% /callout %}}

When you have downloaded and installed R Studio, you can run it on your computer as any other computer sofware.

## RStudio
RStudio is an open source IDE. It recognizes and run under the last version of R installed on your computer. The interface of the Windows version of RStudio is shown in 
[Figure 1](#figure-interface-of-rstudio-for-windows). This interface is similar to other statistical packages (i.e. SPSS), with four differentiated regions:
{{< figure library="true" src="R-Studio-Console.jpg" title="Interface of RStudio for Windows" numbered="true" >}}
- the R script,
- the R console,
- the R working environment, and
- the graphical output.

## R Script
The R script window is where the R code is compiled. The code in the script can be ran:
- on the whole (by selecting all the script),
- line by line (by selecting only the line or by placing the cursor in the correspondent line of the script), or
- a given part of the code inside a line (by selecting such part of the code).

The selected code can be ran by pressing <mark>Ctrl+R</mark> or by doing click in the <mark>Run</mark> button. The result of running the script will be shown either in the R console or in the graphical output window. If the script includes creation of any object, it will be listed in the R working environment window.

## R Console
                                                         
The R console has the same functionalities than the R-GUI. It has only one editing line and the results of the calculation are displayed in the same window. The error messages and other information related with the script running process are also shown in the R console. The code writen in the R console can be run by pressing <mark>Enter</mark> or <mark>Ctrl+R</mark>, and it will not suppose any change in the R script. That is why it is very useful for testing code before implementing it to the script.

## R Environment
The R environment window shows all the objects that was created in R and that are active to be used. It provides a quick overview of not only the number and name of the objects in the working environment, but also about the information stored and the type of the object.

## Graphical Output
The graphical output window is where the graphs are represented as default. Nevertheless, the figures can also be represented in external devices by request. In this window the help about the core functions or the implemented in each library is displayed. This window allows also to install new packages and libraries not included in the core files.

To complete the exercises detailed hereinafter, R and RStudio (by this order) must be installed in your computer.
